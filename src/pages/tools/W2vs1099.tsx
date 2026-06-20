import React, { useState } from "react";
import { Briefcase, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useSeo } from "@/lib/seo";
import { calculateFederalIncomeTax, FilingStatus, STANDARD_DEDUCTION } from "@/lib/tax-brackets";

const FICA_RATE = 0.0765;
const SE_TAX_RATE = 0.153;
const SE_MULTIPLIER = 0.9235;

export default function W2vs1099() {
  useSeo({
    title: "W-2 vs 1099 Calculator 2026 | Freelance Salary Comparison",
    description: "Compare a W-2 salary offer against a 1099 freelance contract. Calculate the exact difference in take-home pay after FICA, self-employment taxes, and deductions.",
    path: "/tools/w2-vs-1099-calculator"
  });

  const [w2Input, setW2Input] = useState("80000");
  const [contractInput, setContractInput] = useState("100000");
  const [expensesInput, setExpensesInput] = useState("5000");

  const w2Salary = parseFloat(w2Input) || 0;
  const contractAmount = parseFloat(contractInput) || 0;
  const expenses = parseFloat(expensesInput) || 0;

  // W-2 Calculation
  const w2Fica = w2Salary * FICA_RATE;
  const w2TaxableIncome = Math.max(0, w2Salary - STANDARD_DEDUCTION["single"]);
  const w2FedTax = calculateFederalIncomeTax(w2TaxableIncome, "single");
  const w2TakeHome = w2Salary - w2Fica - w2FedTax;

  // 1099 Calculation
  const netBusinessIncome = Math.max(0, contractAmount - expenses);
  const seTax = netBusinessIncome * SE_MULTIPLIER * SE_TAX_RATE;
  const seTaxDeduction = seTax / 2;
  const adjustedGrossIncome = netBusinessIncome - seTaxDeduction;
  const contractTaxableIncome = Math.max(0, adjustedGrossIncome - STANDARD_DEDUCTION["single"]);
  const contractFedTax = calculateFederalIncomeTax(contractTaxableIncome, "single");
  const contractTakeHome = netBusinessIncome - seTax - contractFedTax;

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

  const difference = contractTakeHome - w2TakeHome;
  const winner = difference > 0 ? "1099 Contract" : difference < 0 ? "W-2 Salary" : "Tie";

  return (
    <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-5xl">
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
          W-2 vs 1099 Comparison
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          Which offer actually pays more after taxes? Compare a full-time salary against an independent contractor rate.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
        {/* W-2 Input Section */}
        <Card className="shadow-sm border-blue-500/20 bg-blue-500/5">
          <CardHeader>
            <CardTitle className="text-blue-600 dark:text-blue-400">W-2 Employee Offer</CardTitle>
            <CardDescription>Enter the gross annual salary offered.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="w2Salary">Gross Annual Salary</Label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-muted-foreground font-medium">$</span>
                <Input 
                  id="w2Salary"
                  type="number"
                  className="pl-8 text-lg font-medium"
                  value={w2Input}
                  onChange={(e) => setW2Input(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <div className="px-6 py-4 bg-blue-500/10 border-t border-blue-500/20">
            <div className="flex justify-between items-center text-sm mb-2">
              <span className="text-muted-foreground">FICA Tax (7.65%)</span>
              <span>-{formatCurrency(w2Fica)}</span>
            </div>
            <div className="flex justify-between items-center text-sm mb-4">
              <span className="text-muted-foreground">Federal Income Tax</span>
              <span>-{formatCurrency(w2FedTax)}</span>
            </div>
            <div className="flex justify-between items-center font-bold text-xl text-blue-700 dark:text-blue-300">
              <span>Take-Home Pay</span>
              <span>{formatCurrency(w2TakeHome)}</span>
            </div>
          </div>
        </Card>

        {/* 1099 Input Section */}
        <Card className="shadow-sm border-amber-500/20 bg-amber-500/5">
          <CardHeader>
            <CardTitle className="text-amber-600 dark:text-amber-400">1099 Freelance Offer</CardTitle>
            <CardDescription>Enter the gross contract amount and expenses.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contractAmount">Gross Annual Contract</Label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-muted-foreground font-medium">$</span>
                <Input 
                  id="contractAmount"
                  type="number"
                  className="pl-8 text-lg font-medium"
                  value={contractInput}
                  onChange={(e) => setContractInput(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="expenses">Expected Business Expenses</Label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-muted-foreground font-medium">$</span>
                <Input 
                  id="expenses"
                  type="number"
                  className="pl-8 text-lg font-medium"
                  value={expensesInput}
                  onChange={(e) => setExpensesInput(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <div className="px-6 py-4 bg-amber-500/10 border-t border-amber-500/20">
            <div className="flex justify-between items-center text-sm mb-2">
              <span className="text-muted-foreground">SE Tax (15.3%)</span>
              <span>-{formatCurrency(seTax)}</span>
            </div>
            <div className="flex justify-between items-center text-sm mb-4">
              <span className="text-muted-foreground">Federal Income Tax</span>
              <span>-{formatCurrency(contractFedTax)}</span>
            </div>
            <div className="flex justify-between items-center font-bold text-xl text-amber-700 dark:text-amber-300">
              <span>Net Take-Home</span>
              <span>{formatCurrency(contractTakeHome)}</span>
            </div>
          </div>
        </Card>
      </div>

      <Card className="max-w-2xl mx-auto shadow-lg border-primary/20 bg-card overflow-hidden text-center">
        <div className="bg-primary/5 px-6 py-8 border-b border-border/50">
          <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">The Winner Is</p>
          <div className="text-4xl md:text-5xl font-bold tracking-tighter text-primary break-words">
            {winner}
          </div>
        </div>
        <CardContent className="p-6">
          <p className="text-lg text-muted-foreground">
            The {winner} pays <span className="font-bold text-foreground">{formatCurrency(Math.abs(difference))}</span> more per year in pure take-home cash after federal taxes.
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            * Assumptions: Single filer. State taxes and employee benefits (health insurance, 401k match, paid time off) are not included. 1099 contractors must often pay out of pocket for benefits that W-2 employees receive for free.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
