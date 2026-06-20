import React, { useState, useMemo } from "react";
import { Clock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useSeo } from "@/lib/seo";
import { calculateFederalIncomeTax, FilingStatus, STANDARD_DEDUCTION } from "@/lib/tax-brackets";

const SE_TAX_RATE = 0.153;
const SE_MULTIPLIER = 0.9235;

export default function RateCalculator() {
  useSeo({
    title: "Freelance Hourly Rate Calculator 2026 | Calculate Required Rate",
    description: "Reverse engineer your freelance hourly rate. Enter your target net take-home pay, and we calculate the exact gross hourly rate required after 2026 taxes and expenses.",
    path: "/tools/freelance-hourly-rate-calculator"
  });

  const [targetTakeHomeStr, setTargetTakeHomeStr] = useState("80000");
  const [expensesStr, setExpensesStr] = useState("10000");
  const [hoursPerWeekStr, setHoursPerWeekStr] = useState("30");
  const [weeksOffStr, setWeeksOffStr] = useState("4");

  const targetTakeHome = parseFloat(targetTakeHomeStr) || 0;
  const expenses = parseFloat(expensesStr) || 0;
  const hoursPerWeek = parseFloat(hoursPerWeekStr) || 0;
  const weeksOff = parseFloat(weeksOffStr) || 0;

  const billableWeeks = Math.max(0, 52 - weeksOff);
  const totalBillableHours = billableWeeks * hoursPerWeek;

  // Brute force find the required gross revenue to hit the target take-home
  const requiredGross = useMemo(() => {
    if (targetTakeHome <= 0) return 0;
    
    let low = targetTakeHome;
    let high = targetTakeHome * 3; // safe upper bound
    let bestGross = high;

    for (let i = 0; i < 50; i++) {
      const mid = (low + high) / 2;
      const netBusinessIncome = Math.max(0, mid - expenses);
      const seTax = netBusinessIncome * SE_MULTIPLIER * SE_TAX_RATE;
      const seTaxDeduction = seTax / 2;
      const adjustedGrossIncome = netBusinessIncome - seTaxDeduction;
      const taxableIncome = Math.max(0, adjustedGrossIncome - STANDARD_DEDUCTION["single"]);
      const fedTax = calculateFederalIncomeTax(taxableIncome, "single");
      
      const calculatedTakeHome = netBusinessIncome - seTax - fedTax;

      if (calculatedTakeHome < targetTakeHome) {
        low = mid;
      } else {
        high = mid;
        bestGross = mid;
      }
    }
    return bestGross;
  }, [targetTakeHome, expenses]);

  const hourlyRate = totalBillableHours > 0 ? requiredGross / totalBillableHours : 0;

  // Final confirmation math
  const netBusinessIncome = Math.max(0, requiredGross - expenses);
  const seTax = netBusinessIncome * SE_MULTIPLIER * SE_TAX_RATE;
  const taxableIncome = Math.max(0, (netBusinessIncome - (seTax / 2)) - STANDARD_DEDUCTION["single"]);
  const fedTax = calculateFederalIncomeTax(taxableIncome, "single");

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

  return (
    <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-5xl">
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
          Hourly Rate Calculator
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          Don't guess your rates. Enter your target take-home pay, and we'll calculate exactly what you must charge per hour to cover taxes and time off.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start mb-12">
        <div className="md:col-span-5 lg:col-span-6 space-y-6">
          <Card className="shadow-sm border-border">
            <CardHeader>
              <CardTitle>Your Goals</CardTitle>
              <CardDescription>What do you want to take home after all taxes and expenses?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="target">Target Annual Take-Home (Net)</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-muted-foreground font-medium">$</span>
                  <Input 
                    id="target"
                    type="number"
                    className="pl-8 text-lg font-medium text-emerald-600 dark:text-emerald-400"
                    value={targetTakeHomeStr}
                    onChange={(e) => setTargetTakeHomeStr(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="expenses">Expected Annual Business Expenses</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-muted-foreground font-medium">$</span>
                  <Input 
                    id="expenses"
                    type="number"
                    className="pl-8 text-lg font-medium"
                    value={expensesStr}
                    onChange={(e) => setExpensesStr(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hours">Billable Hrs / Week</Label>
                  <Input 
                    id="hours"
                    type="number"
                    className="text-lg font-medium"
                    value={hoursPerWeekStr}
                    onChange={(e) => setHoursPerWeekStr(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">Only count hours you actually charge clients.</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weeksOff">Weeks Off / Year</Label>
                  <Input 
                    id="weeksOff"
                    type="number"
                    className="text-lg font-medium"
                    value={weeksOffStr}
                    onChange={(e) => setWeeksOffStr(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">Vacation, sick days, and holidays.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-7 lg:col-span-6">
          <Card className="shadow-lg border-primary/20 bg-card overflow-hidden text-center h-full flex flex-col">
            <div className="bg-primary/5 px-6 py-10 border-b border-border/50 flex-1 flex flex-col justify-center">
              <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Required Minimum Rate</p>
              <div className="text-6xl md:text-7xl font-bold tracking-tighter text-primary break-words">
                {formatCurrency(hourlyRate)}<span className="text-2xl text-muted-foreground font-medium">/hr</span>
              </div>
              <p className="text-muted-foreground mt-6">
                Based on <strong className="text-foreground">{totalBillableHours}</strong> total billable hours per year.
              </p>
            </div>
            
            <div className="bg-card px-6 py-6 border-t border-border/50">
              <h4 className="text-sm font-semibold mb-4 text-left">To hit your goal, you must generate:</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Required Gross Revenue</span>
                  <span className="font-semibold text-foreground">{formatCurrency(requiredGross)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Business Expenses</span>
                  <span className="text-destructive">-{formatCurrency(expenses)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Estimated SE Tax</span>
                  <span className="text-orange-500">-{formatCurrency(seTax)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Estimated Fed Income Tax</span>
                  <span className="text-blue-500">-{formatCurrency(fedTax)}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold pt-2 border-t border-border">
                  <span className="text-emerald-500">Target Take-Home</span>
                  <span className="text-emerald-500">{formatCurrency(targetTakeHome)}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
