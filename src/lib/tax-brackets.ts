export type FilingStatus = "single" | "married_jointly" | "married_separately" | "head_of_household";

// 2026 Estimated Federal Tax Brackets (Adjusted for inflation)
// Based on typical IRS inflation adjustments
export const STANDARD_DEDUCTION = {
  single: 15000,
  married_jointly: 30000,
  married_separately: 15000,
  head_of_household: 22500,
};

export const FEDERAL_BRACKETS: Record<FilingStatus, { rate: number; upTo: number }[]> = {
  single: [
    { rate: 0.10, upTo: 11925 },
    { rate: 0.12, upTo: 48475 },
    { rate: 0.22, upTo: 103350 },
    { rate: 0.24, upTo: 197300 },
    { rate: 0.32, upTo: 250525 },
    { rate: 0.35, upTo: 625300 },
    { rate: 0.37, upTo: Infinity },
  ],
  married_jointly: [
    { rate: 0.10, upTo: 23850 },
    { rate: 0.12, upTo: 96950 },
    { rate: 0.22, upTo: 206700 },
    { rate: 0.24, upTo: 394600 },
    { rate: 0.32, upTo: 501050 },
    { rate: 0.35, upTo: 750600 },
    { rate: 0.37, upTo: Infinity },
  ],
  married_separately: [
    { rate: 0.10, upTo: 11925 },
    { rate: 0.12, upTo: 48475 },
    { rate: 0.22, upTo: 103350 },
    { rate: 0.24, upTo: 197300 },
    { rate: 0.32, upTo: 250525 },
    { rate: 0.35, upTo: 375300 },
    { rate: 0.37, upTo: Infinity },
  ],
  head_of_household: [
    { rate: 0.10, upTo: 17050 },
    { rate: 0.12, upTo: 64950 },
    { rate: 0.22, upTo: 103350 },
    { rate: 0.24, upTo: 197300 },
    { rate: 0.32, upTo: 250525 },
    { rate: 0.35, upTo: 625300 },
    { rate: 0.37, upTo: Infinity },
  ]
};

export function calculateFederalIncomeTax(taxableIncome: number, status: FilingStatus): number {
  if (taxableIncome <= 0) return 0;
  
  const brackets = FEDERAL_BRACKETS[status];
  let tax = 0;
  let previousLimit = 0;

  for (const bracket of brackets) {
    if (taxableIncome > previousLimit) {
      const taxableAmountInBracket = Math.min(taxableIncome - previousLimit, bracket.upTo - previousLimit);
      tax += taxableAmountInBracket * bracket.rate;
      previousLimit = bracket.upTo;
    } else {
      break;
    }
  }

  return tax;
}
