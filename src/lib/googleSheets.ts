import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

// Google's PEM private key arrives with literal \n sequences when stored as a
// single-line env var — must be un-escaped to real newlines or JWT signing fails.
function getServiceAccountAuth() {
  const privateKey = (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n");

  return new JWT({
    email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export type LeadRow = {
  timestamp: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  capacity: string;
  message: string;
  source: "contact-form" | "survey-popup";
};

export async function appendLeadToSheet(row: LeadRow): Promise<void> {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, getServiceAccountAuth());
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];

  // Match our field names to the sheet's actual header row case-insensitively —
  // addRow() matches keys to headers by exact string, so a header casing mismatch
  // (e.g. "Timestamp" vs "timestamp") silently writes nothing instead of throwing.
  await sheet.loadHeaderRow();
  const rowByActualHeader: Record<string, string> = {};
  for (const header of sheet.headerValues) {
    const match = Object.keys(row).find(
      (key) => key.toLowerCase() === header.toLowerCase()
    );
    if (match) {
      rowByActualHeader[header] = row[match as keyof LeadRow];
    }
  }

  await sheet.addRow(rowByActualHeader);
}
