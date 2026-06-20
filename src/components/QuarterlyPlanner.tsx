import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Copy, CalendarDays } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FilingStatus, getBrackets, getStandardDeduction, computeTaxFromBrackets, computeSETax } from "@/lib/tax";

export default function QuarterlyPlanner() {
  const { toast } = useToast();

  const [seIncomeInput, setSeIncomeInput] = useState<string>("");
  const [otherIncomeInput, setOtherIncomeInput] = useState<string>("");
  const [withholdingInput, setWithholdingInput] = useState<string>("");
  const [filingStatus, setFilingStatus] = useState<FilingStatus>("single");

  const seIncome = parseFloat(seIncomeInput) || 0;
  const otherIncome = parseFloat(otherIncomeInput) || 0;
  const withholding = parseFloat(withholdingInput) || 0;

  // SE Tax
  const { totalSETax, deductibleSETax } = computeSETax(seIncome, filingStatus);

  // Income Tax
  const agi = seIncome + otherIncome - deductibleSETax;
  const standardDeduction = getStandardDeduction(filingStatus);
  const taxableIncome = Math.max(0, agi - standardDeduction);
  
  const brackets = getBrackets(filingStatus);
  const federalIncomeTax = computeTaxFromBrackets(taxableIncome, brackets);

  const totalTaxOwed = totalSETax + federalIncomeTax;
  const taxAfterWithholding = Math.max(0, totalTaxOwed - withholding);
  const quarterlyPayment = taxAfterWithholding / 4;

  const effectiveTaxRate = seIncome + otherIncome > 0 
    ? (totalTaxOwed / (seIncome + otherIncome)) * 100 
    : 0;

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

  const handleCopySchedule = () => {
    const summary = `2026 Quarterly Estimated Tax Plan:
Total Estimated Annual Tax: ${formatCurrency(totalTaxOwed)}
Self-Employment Tax: ${formatCurrency(totalSETax)}
Federal Income Tax: ${formatCurrency(federalIncomeTax)}
Less: Withholding Already Paid: -${formatCurrency(withholding)}
Total Owed After Withholding: ${formatCurrency(taxAfterWithholding)}

Quarterly Payments (${formatCurrency(quarterlyPayment)} each):
Q1: April 15, 2026
Q2: June 15, 2026
Q3: September 15, 2026
Q4: January 15, 2027`;
    
    navigator.clipboard.writeText(summary);
    toast({
      title: "Copied to clipboard",
      description: "Quarterly payment schedule has been copied.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Plan your quarterly taxes</h2>
        <p className="text-muted-foreground">
          Freelancers don't have taxes withheld automatically. Estimate your total annual tax and 
          see what you need to pay each quarter to avoid IRS penalties.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Inputs */}
        <div className="md:col-span-5 lg:col-span-6 space-y-6">
          <Card className="shadow-sm border-border">
            <CardHeader>
              <CardTitle>Annual Projections</CardTitle>
              <CardDescription>Enter your total expected 2026 income and status.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="se-income">Projected Annual SE Income (USD)</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-muted-foreground font-medium">$</span>
                  <Input 
                    id="se-income"
                    type="number"
                    min="0"
                    step="0.01"
                    className="pl-8 text-lg font-medium"
                    placeholder="0.00"
                    value={seIncomeInput}
                    onChange={(e) => setSeIncomeInput(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="filing-status">Filing Status</Label>
                <Select value={filingStatus} onValueChange={(val: FilingStatus) => setFilingStatus(val)}>
                  <SelectTrigger id="filing-status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="mfj">Married Filing Jointly</SelectItem>
                    <SelectItem value="mfs">Married Filing Separately</SelectItem>
                    <SelectItem value="hoh">Head of Household</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="other-income">Other Income (W-2, Interest, etc.)</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-muted-foreground font-medium">$</span>
                  <Input 
                    id="other-income"
                    type="number"
                    min="0"
                    className="pl-8"
                    placeholder="0.00"
                    value={otherIncomeInput}
                    onChange={(e) => setOtherIncomeInput(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="withholding">Federal Withholding Already Paid</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-muted-foreground font-medium">$</span>
                  <Input 
                    id="withholding"
                    type="number"
                    min="0"
                    className="pl-8"
                    placeholder="0.00"
                    value={withholdingInput}
                    onChange={(e) => setWithholdingInput(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Output */}
        <div className="md:col-span-7 lg:col-span-6 space-y-6">
          <Card className="shadow-lg border-primary/20 bg-card overflow-hidden">
            <div className="bg-primary/5 px-6 py-8 border-b border-border/50 text-center">
              <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">Total Estimated Annual Tax</p>
              <div className="text-5xl md:text-6xl font-bold tracking-tighter text-primary break-words">
                {formatCurrency(totalTaxOwed)}
              </div>
            </div>
            
            <CardContent className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm md:text-base">
                  <span className="text-muted-foreground">Self-Employment Tax</span>
                  <span className="font-medium">{formatCurrency(totalSETax)}</span>
                </div>
                <div className="flex justify-between items-center text-sm md:text-base">
                  <span className="text-muted-foreground">Federal Income Tax</span>
                  <span className="font-medium">{formatCurrency(federalIncomeTax)}</span>
                </div>
                {withholding > 0 && (
                  <div className="flex justify-between items-center text-sm md:text-base text-green-600 dark:text-green-400">
                    <span>Less: Withholding Already Paid</span>
                    <span>-{formatCurrency(withholding)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center font-semibold pt-3 border-t border-border">
                  <span>Total Owed After Withholding</span>
                  <span>{formatCurrency(taxAfterWithholding)}</span>
                </div>
              </div>

              <div className="pt-2 text-sm text-muted-foreground">
                Effective Income Tax Rate: <span className="font-medium text-foreground">{effectiveTaxRate.toFixed(1)}%</span>
              </div>
            </CardContent>
          </Card>

          {/* Quarterly Payments Schedule */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-primary" />
              Quarterly Payments
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { term: "Q1", date: "April 15, 2026" },
                { term: "Q2", date: "June 15, 2026" },
                { term: "Q3", date: "Sept 15, 2026" },
                { term: "Q4", date: "Jan 15, 2027" },
              ].map((q) => (
                <Card key={q.term} className="bg-muted/30 border-border/60">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {q.term}: {q.date}
                    </span>
                    <span className="text-lg font-bold text-foreground">
                      {formatCurrency(quarterlyPayment)}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <Button variant="outline" onClick={handleCopySchedule} className="shadow-sm w-full sm:w-auto">
                <Copy className="mr-2 h-4 w-4" />
                Copy Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
