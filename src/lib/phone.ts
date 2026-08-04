// Accepts Pakistani mobile numbers in exactly these forms (no spaces/dashes):
// 923337566883, +923337566883, 03337566883, 3337566883
export const PK_PHONE_REGEX = /^(\+92|92|0)?3\d{9}$/;

export function isValidPkPhone(phone: string): boolean {
  return PK_PHONE_REGEX.test(phone.trim());
}
