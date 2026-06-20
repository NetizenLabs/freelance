export type FilingStatus = 'single' | 'mfj' | 'mfs' | 'hoh';

export interface TaxBracket {
  rate: number;
  upTo: number;
}

export function getBrackets(status: FilingStatus): TaxBracket[] {
  switch (status) {
    case 'mfj':
      return [
        { rate: 0.10, upTo: 24300 },
        { rate: 0.12, upTo: 98800 },
        { rate: 0.22, upTo: 210800 },
        { rate: 0.24, upTo: 402600 },
        { rate: 0.32, upTo: 511300 },
        { rate: 0.35, upTo: 767150 },
        { rate: 0.37, upTo: Infinity }
      ];
    case 'hoh':
      return [
        { rate: 0.10, upTo: 17350 },
        { rate: 0.12, upTo: 66150 },
        { rate: 0.22, upTo: 105400 },
        { rate: 0.24, upTo: 201300 },
        { rate: 0.32, upTo: 255650 },
        { rate: 0.35, upTo: 639300 },
        { rate: 0.37, upTo: Infinity }
      ];
    case 'single':
    case 'mfs':
    default:
      return [
        { rate: 0.10, upTo: 12150 },
        { rate: 0.12, upTo: 49400 },
        { rate: 0.22, upTo: 105400 },
        { rate: 0.24, upTo: 201300 },
        { rate: 0.32, upTo: 255650 },
        { rate: 0.35, upTo: 639300 },
        { rate: 0.37, upTo: Infinity }
      ];
  }
}

export function getStandardDeduction(status: FilingStatus): number {
  switch (status) {
    case 'mfj': return 31500;
    case 'hoh': return 23625;
    case 'single': return 15750;
    case 'mfs': return 15750;
    default: return 15750;
  }
}

export function computeTaxFromBrackets(taxableIncome: number, brackets: TaxBracket[]): number {
  let tax = 0;
  let previousBound = 0;

  for (const bracket of brackets) {
    if (taxableIncome > previousBound) {
      const taxableInThisBracket = Math.min(taxableIncome, bracket.upTo) - previousBound;
      tax += taxableInThisBracket * bracket.rate;
      previousBound = bracket.upTo;
    } else {
      break;
    }
  }

  return tax;
}

export function computeSETax(annualSEIncome: number, status: FilingStatus) {
  const taxableSEBase = annualSEIncome * 0.9235;
  const SS_CAP = 184500;
  
  const ssTax = Math.min(taxableSEBase, SS_CAP) * 0.124;
  const medicareTax = taxableSEBase * 0.029;

  let additionalMedicareThreshold = 200000;
  if (status === 'mfj') additionalMedicareThreshold = 250000;
  else if (status === 'mfs') additionalMedicareThreshold = 125000; // 2026 threshold for MFS is $125k, but prompt says $200k single/HoH/MFS... wait, prompt says "$200k single/HoH/MFS". Let's follow prompt exactly.
  if (status === 'mfs') additionalMedicareThreshold = 200000;

  const additionalMedicareTax = Math.max(0, taxableSEBase - additionalMedicareThreshold) * 0.009;

  const totalSETax = ssTax + medicareTax + additionalMedicareTax;
  const deductibleSETax = totalSETax * 0.5;

  return {
    ssTax,
    medicareTax,
    additionalMedicareTax,
    totalSETax,
    deductibleSETax
  };
}
