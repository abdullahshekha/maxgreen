"use client";

import { useState } from "react";
import { Calculator, Zap, TrendingDown } from "lucide-react";

const PRICE_PER_UNIT = 45; // PKR per kWh
const PANEL_EFFICIENCY = 0.8;

export default function SolarCalculator() {
  const [method, setMethod] = useState<"average" | "monthly">("average");
  const [averageUnits, setAverageUnits] = useState("");
  const [monthlyUnits, setMonthlyUnits] = useState<string[]>(Array(12).fill(""));
  const [result, setResult] = useState<null | {
    recommendedKW: number;
    annualSavings: number;
    monthlyBillReduction: number;
  }>(null);

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ];

  const calculate = () => {
    let totalMonthlyUnits = 0;

    if (method === "average") {
      totalMonthlyUnits = parseFloat(averageUnits) || 0;
    } else {
      const total = monthlyUnits.reduce((sum, u) => sum + (parseFloat(u) || 0), 0);
      totalMonthlyUnits = total / 12;
    }

    if (totalMonthlyUnits <= 0) return;

    const recommendedKW = Math.ceil((totalMonthlyUnits / (30 * 4 * PANEL_EFFICIENCY)) * 10) / 10;
    const monthlyBillReduction = totalMonthlyUnits * PRICE_PER_UNIT * 0.7;
    const annualSavings = monthlyBillReduction * 12;

    setResult({ recommendedKW, annualSavings, monthlyBillReduction });
    window.dispatchEvent(
      new CustomEvent("solar-estimate", { detail: { capacity: `${recommendedKW} kW` } })
    );
  };

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
            Solar Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
            Find Your Ideal Solar System
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Enter your monthly electricity consumption from your LESCO/KESC bill
            and we&apos;ll instantly recommend the right system size and estimate your savings.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-6 sm:p-10">
            {/* Method Toggle */}
            <div className="flex gap-2 bg-gray-100 p-1 rounded-xl mb-8 w-[30rem] max-w-full">
              <button
                onClick={() => { setMethod("average"); setResult(null); }}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all ${
                  method === "average"
                    ? "bg-white text-green-700 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Average Units
              </button>
              <button
                onClick={() => { setMethod("monthly"); setResult(null); }}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all ${
                  method === "monthly"
                    ? "bg-white text-green-700 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Month by Month
              </button>
            </div>

            {/* Input */}
            {method === "average" ? (
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Average Monthly Units (kWh)
                </label>
                <div className="relative max-w-xs">
                  <input
                    type="number"
                    value={averageUnits}
                    onChange={(e) => { setAverageUnits(e.target.value); setResult(null); }}
                    placeholder="e.g. 450"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">
                    kWh
                  </span>
                </div>
                <p className="text-gray-400 text-xs mt-2">
                  Find this in the &quot;Month Usage History&quot; section of your electricity bill.
                </p>
              </div>
            ) : (
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Monthly Units (kWh) — Last 12 Months
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {months.map((month, i) => (
                    <div key={month}>
                      <label className="block text-xs text-gray-500 mb-1">{month}</label>
                      <input
                        type="number"
                        value={monthlyUnits[i]}
                        onChange={(e) => {
                          const updated = [...monthlyUnits];
                          updated[i] = e.target.value;
                          setMonthlyUnits(updated);
                          setResult(null);
                        }}
                        placeholder="0"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Calculate button */}
            <button
              onClick={calculate}
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Calculator className="w-5 h-5" />
              Calculate My System
            </button>

            {/* Results */}
            {result && (
              <div className="mt-10 border-t border-gray-100 pt-10">
                <h3 className="text-lg font-extrabold text-gray-900 mb-6">
                  Your Solar System Recommendation
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-green-950 border border-green-900 rounded-2xl p-5">
                    <Zap className="w-6 h-6 text-green-400 mb-2" />
                    <div className="text-2xl font-extrabold text-white">
                      {result.recommendedKW} kW
                    </div>
                    <div className="text-xs text-green-400 font-semibold mt-1">
                      Recommended System
                    </div>
                  </div>
                  <div className="bg-green-950 border border-green-900 rounded-2xl p-5">
                    <TrendingDown className="w-6 h-6 text-green-400 mb-2" />
                    <div className="text-2xl font-extrabold text-white">
                      PKR {result.monthlyBillReduction.toLocaleString()}
                    </div>
                    <div className="text-xs text-green-400 font-semibold mt-1">
                      Monthly Savings
                    </div>
                  </div>
                  <div className="bg-green-950 border border-green-900 rounded-2xl p-5">
                    <TrendingDown className="w-6 h-6 text-green-400 mb-2" />
                    <div className="text-2xl font-extrabold text-white">
                      PKR {Math.round(result.annualSavings / 1000)}K
                    </div>
                    <div className="text-xs text-green-400 font-semibold mt-1">
                      Annual Savings
                    </div>
                  </div>
                </div>

                <a
                  href="#get-quote"
                  className="mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  Get an Exact Quote →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
