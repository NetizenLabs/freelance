export type PostBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "cta"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readTime: number;
  content: PostBlock[];
}

export const POSTS: BlogPost[] = [
  {
    slug: "how-to-pay-quarterly-taxes-texas",
    title: "How to Pay Quarterly Estimated Taxes in Texas (2026 Guide)",
    description: "Learn how Texas freelancers handle quarterly estimated taxes. A complete guide to federal requirements, payment methods, and common pitfalls for 2026.",
    category: "State Guides",
    publishedAt: "2026-04-15",
    readTime: 6,
    content: [
      { type: "p", text: "If you are a freelancer living in Texas, you already know one of the biggest financial perks of the Lone Star State: there is no state income tax. But while you might be off the hook with the Texas Comptroller for personal income tax, the federal government still expects its share. Understanding how to manage your quarterly estimated taxes is crucial to avoiding underpayment penalties and keeping your freelance business running smoothly." },
      { type: "h2", text: "The Reality of No State Income Tax" },
      { type: "p", text: "Texas is one of nine states that do not levy a personal income tax on their residents. For freelancers, this means that you do not need to file a state income tax return or pay quarterly estimated state income taxes. However, this does not mean you are entirely tax-free. You are still responsible for paying federal income tax and federal self-employment (SE) tax." },
      { type: "p", text: "The self-employment tax is the federal government's way of collecting Social Security and Medicare taxes from independent contractors. For 2026, the self-employment tax rate is 15.3%, consisting of 12.4% for Social Security and 2.9% for Medicare. You must pay this tax in addition to your regular federal income tax. To figure out exactly what this looks like for your specific situation, you can use [the calculator on the home page] to estimate your combined tax burden." },
      { type: "h2", text: "Calculating Your Quarterly Estimated Tax" },
      { type: "p", text: "Because the United States operates on a pay-as-you-go tax system, freelancers must pay taxes on their income as they earn it throughout the year. Since you don't have an employer withholding taxes from a paycheck, you must calculate and submit these payments yourself four times a year." },
      { type: "p", text: "To calculate your federal quarterly estimated taxes, you generally use IRS Form 1040-ES. This form helps you estimate your expected Adjusted Gross Income (AGI), taxable income, taxes, deductions, and credits for the year. A common rule of thumb is to set aside 25% to 30% of your net freelance income for federal taxes, though your exact percentage will depend on your total income and tax bracket." },
      { type: "cta", text: "Calculate Your Quarterly Taxes Now" },
      { type: "h2", text: "Payment Methods for Federal Taxes" },
      { type: "p", text: "The IRS offers several convenient ways to pay your quarterly estimated taxes online. The most popular method is IRS Direct Pay, which allows you to make payments directly from your checking or savings account at no cost. It is secure, fast, and provides immediate confirmation." },
      { type: "p", text: "Another option is the Electronic Federal Tax Payment System (EFTPS). This system requires you to create an account and receive a PIN by mail, which takes a few days to set up. However, once established, it is a robust system that allows you to schedule payments up to 365 days in advance. You can also use the IRS2Go mobile app to make payments directly from your smartphone." },
      { type: "h2", text: "The Four 2026 Deadlines" },
      { type: "p", text: "For the 2026 tax year, quarterly estimated tax payments are due on the following dates:" },
      { type: "ul", items: [
        "Q1 (Earnings from Jan 1 – Mar 31): April 15, 2026",
        "Q2 (Earnings from Apr 1 – May 31): June 15, 2026",
        "Q3 (Earnings from Jun 1 – Aug 31): September 15, 2026",
        "Q4 (Earnings from Sep 1 – Dec 31): January 15, 2027"
      ]},
      { type: "callout", text: "Tip: If a due date falls on a weekend or federal holiday, the deadline is pushed to the next business day." },
      { type: "h2", text: "Safe Harbor Rules to Avoid Penalties" },
      { type: "p", text: "Estimating your income as a freelancer can be difficult. The IRS understands this and provides \"safe harbor\" rules to help you avoid underpayment penalties, even if your estimates are off. To meet the safe harbor requirements, your total tax payments for the year (including withholding and estimated payments) must equal at least:" },
      { type: "ul", items: [
        "90% of the tax you owe for the current year, or",
        "100% of the tax shown on your return for the prior year (or 110% if your prior year AGI was more than $150,000 for married filing jointly or single filers)."
      ]},
      { type: "h2", text: "Common Pitfalls for Texas Freelancers" },
      { type: "p", text: "While the lack of a state income tax is a huge benefit, Texas freelancers often make a few common mistakes. First, if you have organized your freelance business as a Limited Liability Company (LLC) or corporation, you must be aware of the Texas Franchise Tax. Although the state recently increased the exemption threshold to over $2.4 million, you still need to file a No Tax Due Information Report if your revenue is below the threshold." },
      { type: "p", text: "Second, if you sell tangible personal property or certain taxable services, you may be required to collect and remit Texas sales and use tax. Consulting with a tax professional can help ensure you meet all state-specific obligations while managing your federal estimated payments." }
    ]
  },
  {
    slug: "upwork-vs-fiverr-fees-us-developers-2026",
    title: "Upwork vs. Fiverr Fees: Which Is Better for US Developers in 2026?",
    description: "A detailed breakdown of Upwork and Fiverr platform fees, withdrawal costs, and tax implications for US-based freelance developers in 2026.",
    category: "Platform Comparisons",
    publishedAt: "2026-04-18",
    readTime: 7,
    content: [
      { type: "p", text: "Choosing the right freelance platform can have a massive impact on your bottom line. For US-based developers, Upwork and Fiverr remain the two most dominant marketplaces. However, their fee structures vary significantly, and understanding how these fees affect your take-home pay is critical. In 2026, both platforms have mature fee models, but which one leaves more money in your pocket?" },
      { type: "h2", text: "Direct Comparison: The Platform Fees" },
      { type: "p", text: "Upwork recently shifted to a flat 10% service fee for most new contracts. This was a departure from their older sliding scale model. However, if you have legacy contracts or work with Enterprise clients, your fee might range anywhere from 0% to 15%. For the vast majority of standard freelance developers, 10% is the rule." },
      { type: "p", text: "Fiverr, on the other hand, charges a flat 20% commission on every transaction. This fee applies to the base gig price as well as any extras or tips the client provides. While Fiverr's model is simpler, it takes a significantly larger bite out of your gross revenue right from the start." },
      { type: "p", text: "To see exactly how these platform fees affect your final payout after taxes, use [the calculator on the home page] to compare both scenarios." },
      { type: "h2", text: "Withdrawal Fees: The Hidden Costs" },
      { type: "p", text: "Platform commissions aren't the only fees you'll encounter. Getting the money from the platform to your bank account incurs additional costs." },
      { type: "p", text: "Upwork offers direct-to-local-bank transfers via ACH for US freelancers, which is generally free. If you choose to withdraw via PayPal or wire transfer, you'll incur additional fees (typically a flat rate for wires or standard PayPal transaction fees). Fiverr also offers direct bank transfers, but they often utilize Payoneer or PayPal, both of which may charge withdrawal fees or currency conversion fees if applicable, though standard US bank transfers are usually straightforward." },
      { type: "h2", text: "Reputation and Discovery Differences" },
      { type: "p", text: "Beyond fees, the nature of the work on each platform affects your earnings. Upwork is generally better suited for long-term contracts, hourly work, and complex, multi-stage development projects. The platform encourages building lasting relationships with clients, which can justify the 10% fee." },
      { type: "p", text: "Fiverr is designed around the \"gig\" model. It is highly optimized for productized services—fixed-scope projects with clear deliverables. While you can build long-term relationships on Fiverr, the platform's structure often leads to higher volume, lower-touch transactions. The 20% fee is the premium you pay for Fiverr bringing a high volume of buyers directly to your gig listings without you having to submit proposals." },
      { type: "h2", text: "A Worked Example: A $5,000 Project" },
      { type: "p", text: "Let's look at the math for a $5,000 development project." },
      { type: "ul", items: [
        "On Upwork: A 10% fee means you pay $500 to the platform. Your net revenue before taxes is $4,500.",
        "On Fiverr: A 20% fee means you pay $1,000 to the platform. Your net revenue before taxes is $4,000."
      ]},
      { type: "p", text: "That $500 difference is substantial. But it's also important to remember that these platform fees are tax-deductible as ordinary business expenses on your Schedule C. This reduces your taxable income, which in turn slightly reduces your self-employment and federal income tax burden." },
      { type: "cta", text: "Calculate Your True Take-Home Pay" },
      { type: "h2", text: "Tax Impact and Verdict" },
      { type: "p", text: "Because you only pay self-employment tax and income tax on your net earnings (after platform fees), the higher fees on Fiverr do reduce your tax bill—but they reduce your actual take-home pay even more. You always prefer lower platform fees, even if it means a slightly higher taxable income." },
      { type: "callout", text: "Verdict: For long-term relationships and high-value custom development work, Upwork's 10% fee structure is far superior. Fiverr is best utilized as a lead-generation tool for productized, highly repeatable coding tasks where the 20% fee is offset by the lack of time spent hunting for clients." }
    ]
  },
  {
    slug: "top-tax-write-offs-digital-marketers-2026",
    title: "Top 7 Tax Write-Offs for Digital Marketers in 2026",
    description: "Maximize your tax savings. Discover the top 7 tax deductions every freelance digital marketer should claim in 2026.",
    category: "Deductions",
    publishedAt: "2026-04-20",
    readTime: 8,
    content: [
      { type: "p", text: "As a freelance digital marketer, you are running a business. This means you are liable for both federal income tax and the 15.3% self-employment (SE) tax on your profits. However, you only pay these taxes on your net income—your gross earnings minus your allowable business expenses. Maximizing your deductions is the most effective way to lower your tax bill." },
      { type: "p", text: "To see how lowering your taxable income impacts your final tax bill, you can test different scenarios using [the calculator on the home page]." },
      { type: "h2", text: "1. The Home Office Deduction" },
      { type: "p", text: "If you use a portion of your home exclusively and regularly for your marketing business, you can claim the home office deduction. The IRS offers two methods for calculating this in 2026: the simplified method ($5 per square foot up to 300 square feet, max $1,500) and the actual expenses method. The actual method allows you to deduct a percentage of your rent, mortgage interest, utilities, and homeowners insurance based on the square footage of your office relative to your entire home." },
      { type: "h2", text: "2. Software Subscriptions and Tools" },
      { type: "p", text: "Digital marketing runs on SaaS. Every subscription you use to operate your business is fully deductible. This includes SEO tools like SEMrush or Ahrefs, creative suites like Adobe Creative Cloud, email marketing platforms like Mailchimp or Klaviyo, and project management tools like Asana or Notion." },
      { type: "h2", text: "3. Education and Online Courses" },
      { type: "p", text: "The digital marketing landscape changes rapidly. The IRS allows you to deduct expenses for education that maintains or improves your skills in your current trade. This includes online courses, certifications, business coaching, and marketing literature. However, you cannot deduct education that qualifies you for a new trade or business." },
      { type: "h2", text: "4. Paid Advertising Spend" },
      { type: "p", text: "If you run ads to promote your own freelance services—whether on Google, Facebook, LinkedIn, or Twitter—that ad spend is entirely deductible. Note that if you manage ad spend for a client, and they reimburse you, you must report the reimbursement as income, but you can deduct the corresponding ad spend as an expense." },
      { type: "h2", text: "5. Business Travel and Conferences" },
      { type: "p", text: "Attending marketing conferences, networking events, or traveling to meet clients can result in significant tax deductions. You can deduct airfare, hotel accommodations, transportation, and 50% of your business meals while traveling away from your tax home. Ensure that the primary purpose of the trip is business, not personal vacation." },
      { type: "h2", text: "6. Internet and Cell Phone" },
      { type: "p", text: "You cannot do digital marketing without the internet. You can deduct the business-use percentage of your home internet and cell phone bills. For example, if you use your phone 60% for client calls and managing social media accounts, you can deduct 60% of the bill. You cannot deduct the base cost of your first landline at home, but a second dedicated business line is fully deductible." },
      { type: "h2", text: "7. Health Insurance Premiums" },
      { type: "p", text: "As a self-employed individual, you may be able to deduct 100% of the health, dental, and qualifying long-term care insurance premiums paid for yourself, your spouse, and your dependents. This is an \"above-the-line\" deduction, meaning it reduces your adjusted gross income (AGI) even if you don't itemize deductions. However, it cannot exceed your net profit for the year." },
      { type: "cta", text: "Estimate Your Tax Savings Now" },
      { type: "h2", text: "Documentation is Key" },
      { type: "callout", text: "Warning: The IRS requires you to maintain adequate records. Keep all receipts, invoices, and bank statements related to these expenses." },
      { type: "p", text: "Using accounting software or a dedicated receipt-scanning app can save you a massive headache during tax season. Commingling personal and business expenses is the most common mistake freelancers make, so always use a dedicated business bank account and credit card to track your deductions cleanly." }
    ]
  },
  {
    slug: "self-employment-tax-explained-2026",
    title: "The Self-Employment Tax Explained: A 2026 Walkthrough for Freelancers",
    description: "Understand the 15.3% self-employment tax, the 92.35% rule, and the Social Security cap for freelancers in the 2026 tax year.",
    category: "Tax Basics",
    publishedAt: "2026-04-22",
    readTime: 7,
    content: [
      { type: "p", text: "When you transition from a traditional W-2 job to freelancing, the biggest financial shock is usually the self-employment (SE) tax. It is the primary reason why a $5,000 freelance check feels so much smaller than a $5,000 salary check. Understanding how the SE tax works is fundamental to pricing your services correctly and ensuring you have enough saved for the IRS." },
      { type: "h2", text: "What is the Self-Employment Tax?" },
      { type: "p", text: "The SE tax is how the federal government collects payroll taxes—specifically Social Security and Medicare—from individuals who work for themselves. When you are an employee, you pay 7.65% of your income toward these programs, and your employer matches that with another 7.65%. When you are a freelancer, you are both the employee and the employer, meaning you must pay the full 15.3% yourself." },
      { type: "p", text: "This 15.3% rate breaks down into:" },
      { type: "ul", items: [
        "12.4% for Social Security",
        "2.9% for Medicare"
      ]},
      { type: "p", text: "It is important to remember that the SE tax is entirely separate from your federal income tax. You must pay both. To see your total combined tax burden based on your current earnings, check out [the calculator on the home page]." },
      { type: "h2", text: "The 92.35% Rule" },
      { type: "p", text: "The IRS recognizes that the SE tax places a heavy burden on freelancers, so they offer a slight concession. You do not pay the 15.3% tax on 100% of your net business income. Instead, you only pay it on 92.35% of your net earnings. This adjustment is meant to simulate the deduction that traditional employers get for paying their half of the payroll taxes." },
      { type: "h2", text: "The Social Security Cap for 2026" },
      { type: "p", text: "The 12.4% Social Security portion of the SE tax is only levied up to a specific income limit, known as the wage base limit or SS cap. For the 2026 tax year, this cap is set at $184,500. This means that any net freelance earnings above $184,500 are exempt from the 12.4% Social Security tax. However, the 2.9% Medicare tax applies to all of your net earnings, regardless of how much you make." },
      { type: "h2", text: "Additional Medicare Surtax" },
      { type: "p", text: "If you are a high-earning freelancer, you may also be subject to the Additional Medicare Tax. This is an extra 0.9% tax on earnings that exceed certain thresholds based on your filing status. For single filers, the threshold is $200,000; for married filing jointly, it is $250,000." },
      { type: "cta", text: "Calculate Your SE Tax Now" },
      { type: "h2", text: "A Worked Example" },
      { type: "p", text: "Let's say you are a single freelancer who earned $80,000 in net business income (after deducting your platform fees and business expenses) in 2026." },
      { type: "p", text: "First, apply the 92.35% rule to find your taxable SE base: $80,000 × 0.9235 = $73,880." },
      { type: "p", text: "Next, calculate the SE tax: $73,880 × 15.3% = $11,303.64." },
      { type: "p", text: "You owe $11,303.64 in SE tax. But there is a silver lining: you get an \"above-the-line\" deduction for half of your SE tax when calculating your federal income tax. In this case, you can deduct $5,651.82 from your Adjusted Gross Income, which will lower your final federal income tax bill." },
      { type: "callout", text: "Remember: Always separate your SE tax from your federal income tax when planning your quarterly estimates. Both must be paid to stay compliant." }
    ]
  },
  {
    slug: "how-much-to-save-for-taxes-5000-project",
    title: "How Much Should You Set Aside for Taxes on a $5,000 Project?",
    description: "A step-by-step breakdown of exactly how much money a US freelancer should set aside for taxes from a $5,000 project.",
    category: "Quick Answers",
    publishedAt: "2026-04-24",
    readTime: 6,
    content: [
      { type: "p", text: "You just landed a $5,000 freelance project. Congratulations! But before you start spending that money, you need to know how much of it actually belongs to you, and how much belongs to the IRS. The golden rule of freelancing is to save your tax money the same day you get paid. But exactly how much should that be?" },
      { type: "h2", text: "The 25-30% Rule of Thumb" },
      { type: "p", text: "If you want a quick and dirty answer, most accountants recommend setting aside 25% to 30% of your gross freelance income for taxes. This generally covers your 15.3% self-employment tax, your federal income tax, and potentially some state income tax. However, a rule of thumb isn't precise. To get an exact number based on your unique situation, you should use [the calculator on the home page]." },
      { type: "h2", text: "Step 1: Deduct Platform Fees" },
      { type: "p", text: "Let's assume you landed this $5,000 project on Upwork, and the platform charges a flat 10% fee. Your gross revenue is $5,000, but Upwork takes $500. Your net earnings—the amount that actually hits your bank account and the amount the IRS taxes—is $4,500." },
      { type: "h2", text: "Step 2: Calculate Self-Employment (SE) Tax" },
      { type: "p", text: "You must pay the 15.3% SE tax on your net earnings. But first, apply the 92.35% rule to find your taxable base." },
      { type: "p", text: "$4,500 × 0.9235 = $4,155.75." },
      { type: "p", text: "Now, calculate the 15.3% tax on that base: $4,155.75 × 15.3% = $635.83." },
      { type: "p", text: "So, your SE tax liability for this specific project is approximately $636." },
      { type: "h2", text: "Step 3: Estimate Federal Income Tax" },
      { type: "p", text: "Federal income tax is highly variable because it depends on your total income for the year, your filing status, and your deductions. Let's assume you are a single filer who expects to make around $70,000 this year, putting you in the 22% marginal tax bracket." },
      { type: "p", text: "You don't pay 22% on the whole $4,500 because of the standard deduction and the deduction for half of your SE tax. As a rough estimate, you might owe an effective federal income tax rate of about 12% on this specific chunk of income. That would be roughly $540." },
      { type: "cta", text: "Calculate Your Exact Tax Withholding" },
      { type: "h2", text: "Step 4: The State Tax Overlay" },
      { type: "p", text: "If you live in a state with an income tax (like California or New York), you must also set aside money for state taxes. If you live in a state without an income tax (like Texas or Florida), you can skip this step." },
      { type: "h2", text: "The Final Recommendation" },
      { type: "p", text: "For this $5,000 project:" },
      { type: "ul", items: [
        "Net Earnings: $4,500",
        "Estimated SE Tax: $636",
        "Estimated Federal Tax: $540",
        "Total Tax Reserve: $1,176"
      ]},
      { type: "callout", text: "Action Plan: Transfer $1,176 into a separate, high-yield savings account designated specifically for taxes the moment the $4,500 hits your checking account." },
      { type: "p", text: "By aggressively saving for taxes immediately upon payment, you ensure you are never caught off guard when quarterly estimated payments are due." }
    ]
  },
  {
    slug: "1099-nec-vs-1099-k-2026",
    title: "1099-NEC vs. 1099-K: What Freelancers Need to Know in 2026",
    description: "Confused by tax forms? Learn the difference between Form 1099-NEC and Form 1099-K, and how US freelancers should handle them in 2026.",
    category: "Tax Basics",
    publishedAt: "2026-04-26",
    readTime: 6,
    content: [
      { type: "p", text: "As tax season approaches, your mailbox (or email inbox) will likely start filling up with tax documents. For freelancers, the two most common and confusing forms are the 1099-NEC and the 1099-K. Understanding the difference between these two forms is essential for accurately reporting your income and avoiding unwanted IRS audits." },
      { type: "h2", text: "What is Form 1099-NEC?" },
      { type: "p", text: "Form 1099-NEC (Nonemployee Compensation) is the standard tax document used to report income paid to independent contractors. If a business or individual client pays you $600 or more during the tax year for your freelance services, they are legally required to issue you a 1099-NEC and send a copy to the IRS." },
      { type: "p", text: "This form is typically used by direct clients who pay you via check, bank transfer, or direct deposit." },
      { type: "h2", text: "What is Form 1099-K?" },
      { type: "p", text: "Form 1099-K (Payment Card and Third Party Network Transactions) is issued by payment settlement entities—such as Stripe, PayPal, Square, or freelance platforms like Upwork—to report the gross amount of payment transactions processed on your behalf." },
      { type: "p", text: "The IRS has been shifting the reporting thresholds for the 1099-K over the past few years. For 2026, you will receive a 1099-K if you meet the current transitional reporting threshold for aggregate payments via third-party networks. It is crucial to monitor IRS announcements for the exact threshold applicable to the 2026 tax year, as it dictates when platforms must report your earnings." },
      { type: "h2", text: "The Risk of Double Counting" },
      { type: "p", text: "The biggest issue freelancers face with these forms is the risk of double counting income. This happens when a client pays you via a third-party processor (like PayPal). The client might mistakenly issue you a 1099-NEC for the payment, while PayPal also issues you a 1099-K for the exact same transaction." },
      { type: "callout", text: "Important: You should only pay tax on that income once. The IRS guidelines state that payments made via third-party networks should be reported on Form 1099-K, not 1099-NEC. If you receive both for the same income, you must report your gross receipts accurately on Schedule C and maintain clear records to prove to the IRS that the amounts overlap." },
      { type: "p", text: "To help estimate your tax liability accurately regardless of which forms you receive, rely on your own meticulous bookkeeping and use [the calculator on the home page] to project your owed taxes." },
      { type: "h2", text: "What If You Don't Receive a Form?" },
      { type: "p", text: "A common misconception among new freelancers is that if they don't receive a 1099 form, they don't have to report the income. This is entirely false. You are legally required to report all of your freelance income on your Schedule C, regardless of whether a client or platform sent you a tax form or whether the amount fell below the $600 reporting threshold." },
      { type: "cta", text: "Plan Your Tax Strategy Now" },
      { type: "h2", text: "Reporting on Schedule C" },
      { type: "p", text: "When you file your taxes, you will tally up all the income reported on your various 1099-NEC and 1099-K forms, add in any cash or unreported direct payments, and enter the total gross receipts on your Schedule C. From there, you will deduct your business expenses (including those platform fees listed on your 1099-K) to arrive at your net profit, which determines your self-employment and income tax liabilities." }
    ]
  },
  {
    slug: "home-office-deduction-2026",
    title: "The Home Office Deduction: Simplified vs. Actual Method (2026)",
    description: "Learn how to legally claim the home office deduction in 2026. Compare the simplified method versus the actual expenses method for freelancers.",
    category: "Deductions",
    publishedAt: "2026-04-28",
    readTime: 7,
    content: [
      { type: "p", text: "For many freelancers, the home office is the epicenter of their business. Fortunately, the IRS allows you to deduct expenses related to your home office, which can significantly lower your self-employment and income taxes. However, the rules surrounding the home office deduction are strict, and you have two different methods for calculating it in 2026: the Simplified Method and the Actual Expenses Method." },
      { type: "p", text: "Maximizing this deduction lowers your net profit, which is the number used to calculate your SE tax. You can see how lowering your net profit affects your bottom line by adjusting your inputs in [the calculator on the home page]." },
      { type: "h2", text: "Eligibility: The Two Strict Tests" },
      { type: "p", text: "Before you can choose a calculation method, you must prove you are eligible for the deduction. The IRS requires you to meet two tests:" },
      { type: "ul", items: [
        "Exclusive and Regular Use: You must use a specific area of your home only for your trade or business. If you work from your dining room table, which you also use to eat meals, you do not qualify. It must be a dedicated space.",
        "Principal Place of Business: Your home office must be the primary location where you conduct business or regularly meet with clients."
      ]},
      { type: "h2", text: "The Simplified Method" },
      { type: "p", text: "Introduced to save taxpayers from complex bookkeeping, the Simplified Method is incredibly straightforward. The IRS allows you to deduct a standard rate of $5 per square foot of your home office, up to a maximum of 300 square feet." },
      { type: "p", text: "For example, if your dedicated home office is 150 square feet, your deduction is $750 (150 sq ft × $5). The absolute maximum deduction under this method is $1,500. You cannot deduct depreciation, and you don't need to keep receipts for every utility bill." },
      { type: "h2", text: "The Actual Expenses Method" },
      { type: "p", text: "The Actual Expenses Method requires you to calculate the exact percentage of your home used for business and apply that percentage to your total home expenses. If your home is 1,000 square feet and your office is 150 square feet, your business percentage is 15%." },
      { type: "p", text: "You can then deduct 15% of your \"indirect expenses,\" which include:" },
      { type: "ul", items: [
        "Rent or mortgage interest",
        "Property taxes",
        "Homeowners or renters insurance",
        "Utilities (electricity, gas, water)",
        "Home repairs and maintenance",
        "Depreciation (if you own the home)"
      ]},
      { type: "h2", text: "Which Method is Better?" },
      { type: "p", text: "If you rent an expensive apartment in a high-cost city, the Actual Expenses Method almost always yields a much larger tax deduction. For instance, if your rent is $3,000 a month ($36,000/year) and your office is 15% of the apartment, your deduction just for rent is $5,400—far exceeding the $1,500 cap of the Simplified Method." },
      { type: "callout", text: "Note: If you own your home and use the Actual Method, you must claim depreciation. When you eventually sell the home, you will be subject to \"depreciation recapture\" rules, which may result in a higher tax bill upon sale. The Simplified Method avoids this complication." },
      { type: "cta", text: "Calculate Your Freelance Tax Burden" },
      { type: "h2", text: "The Audit Myth" },
      { type: "p", text: "Historically, there was a rumor that claiming the home office deduction was an automatic red flag for an IRS audit. Today, with millions of freelancers working remotely, it is a very common and expected deduction. As long as you meet the exclusive use test and keep accurate records, you should not hesitate to claim the deduction you are legally entitled to." }
    ]
  },
  {
    slug: "quarterly-estimated-taxes-california-2026",
    title: "Quarterly Estimated Taxes in California for Freelancers (2026)",
    description: "A comprehensive guide to California estimated taxes for freelancers. Understand FTB deadlines, state tax rates, and how to stay compliant in 2026.",
    category: "State Guides",
    publishedAt: "2026-05-02",
    readTime: 8,
    content: [
      { type: "p", text: "California freelancers carry one of the heaviest tax burdens in the country. Not only are you responsible for the federal 15.3% self-employment tax and federal income tax, but you must also navigate California's state income tax system. The California Franchise Tax Board (FTB) requires independent contractors to make quarterly estimated tax payments, and their schedule is uniquely frustrating." },
      { type: "h2", text: "California's Unusual Payment Schedule" },
      { type: "p", text: "While the IRS requires you to pay 25% of your estimated federal tax liability evenly across four quarters, California requires a front-loaded payment schedule for state taxes. For 2026, the FTB expects your estimated payments to be distributed as follows:" },
      { type: "ul", items: [
        "Q1 (Due April 15, 2026): 30% of total estimated state tax",
        "Q2 (Due June 15, 2026): 40% of total estimated state tax",
        "Q3 (Due Sept 15, 2026): 0% (Yes, zero percent)",
        "Q4 (Due Jan 15, 2027): 30% of total estimated state tax"
      ]},
      { type: "p", text: "This 30/40/0/30 split catches many new California freelancers off guard, resulting in underpayment penalties for the first half of the year. You must plan your cash flow carefully to meet that massive 40% payment in June." },
      { type: "h2", text: "Federal vs. State Requirements" },
      { type: "p", text: "Remember that you must make separate payments to the IRS and the FTB. You will use federal Form 1040-ES to estimate your federal burden and FTB Form 540-ES to estimate your state burden. To get a baseline idea of your federal self-employment and income tax obligations before tackling the state side, utilize [the calculator on the home page]." },
      { type: "h2", text: "High-Income Earner Taxes" },
      { type: "p", text: "California has a highly progressive tax code, with top marginal rates reaching 13.3% (and up to 14.4% when including the payroll tax). If you are an exceptionally successful freelancer, you must also account for the Mental Health Services Tax. This is an additional 1% tax levied on personal income exceeding $1 million." },
      { type: "cta", text: "Check Your Baseline Federal Tax Here" },
      { type: "h2", text: "Avoiding Underpayment Penalties" },
      { type: "p", text: "Like the IRS, California offers safe harbor rules to protect taxpayers from penalties if their income fluctuates. To avoid an FTB penalty, your withholding and estimated payments must equal:" },
      { type: "ul", items: [
        "90% of your current year's state tax liability, or",
        "100% of your prior year's state tax liability (or 110% if your prior year California AGI exceeded $150,000, or $75,000 if married filing separately)."
      ]},
      { type: "callout", text: "Important: California law differs from federal law for extremely high earners. If your California AGI is $1 million or more ($500,000 if married filing separately), you cannot use the prior year's tax safe harbor. You must pay 90% of the current year's tax." },
      { type: "h2", text: "Action Plan for CA Freelancers" },
      { type: "p", text: "To survive freelance taxes in California, you must maintain a dedicated high-yield savings account for taxes. A good rule of thumb for California residents is to set aside 35% to 40% of every freelance invoice. While this feels painfully high, it ensures you have enough liquid cash to cover the federal SE tax, federal income tax, and the aggressive front-loaded FTB estimated payments." }
    ]
  },
  {
    slug: "track-business-expenses-freelancer",
    title: "How to Track Business Expenses as a Freelancer Without Losing Your Mind",
    description: "A simple, stress-free workflow for freelancers to track business expenses, maximize tax deductions, and survive an IRS audit.",
    category: "Workflow",
    publishedAt: "2026-05-05",
    readTime: 7,
    content: [
      { type: "p", text: "As a freelancer, every legitimate business expense you track reduces your net profit, which in turn reduces the amount of self-employment and income tax you owe. Yet, many freelancers leave thousands of dollars on the table because tracking expenses feels like a tedious, overwhelming chore. It doesn't have to be. By setting up a streamlined workflow, you can capture every deduction without losing your mind." },
      { type: "p", text: "Accurate expense tracking directly impacts your bottom line. You can experiment with different profit margins to see how expenses affect your final tax bill using [the calculator on the home page]." },
      { type: "h2", text: "The Golden Rule: Never Commingle Funds" },
      { type: "p", text: "The single biggest mistake freelancers make is paying for web hosting, client dinners, and personal groceries out of the same checking account. Commingling funds makes tax time a nightmare and pierces the corporate veil if you operate as an LLC." },
      { type: "p", text: "Step one of your workflow must be opening a dedicated business checking account and a dedicated business credit card. All freelance income should flow into the business checking, and all business expenses should be charged to the business card. This automatically creates a clean, verifiable audit trail." },
      { type: "h2", text: "A Three-Tier Tracking System" },
      { type: "p", text: "To ensure nothing falls through the cracks, implement a three-tier system:" },
      { type: "ul", items: [
        "1. The Dedicated Card: As mentioned, every software subscription, advertising fee, and office supply goes on the business card.",
        "2. Automated Import: Use accounting software like QuickBooks Self-Employed, Xero, or a free alternative like Wave. Connect your business bank feeds so every transaction is imported automatically.",
        "3. The Monthly Review: Set a calendar appointment for the first Friday of every month. Spend 15 minutes reviewing the imported transactions, categorizing them according to Schedule C categories, and attaching digital receipts."
      ]},
      { type: "h2", text: "Handling Receipts and the \"Shoebox Test\"" },
      { type: "p", text: "The IRS requires you to keep records that prove the amount, time, place, and business purpose of an expense. You do not need to keep physical paper receipts; digital copies are perfectly acceptable. Use an app like Expensify, Dext, or even just a dedicated Google Drive folder to snap photos of physical receipts immediately." },
      { type: "callout", text: "The Shoebox Test: Before claiming an expense, ask yourself: 'If an IRS auditor pulled this receipt out of a shoebox three years from now, could I clearly articulate how this specific purchase directly helped my business make money?' If the answer is no, do not deduct it." },
      { type: "cta", text: "See How Expenses Lower Your Taxes" },
      { type: "h2", text: "Categories Aligned to Schedule C" },
      { type: "p", text: "To make filing your taxes effortless, set up your accounting software categories to match the lines on IRS Form 1040, Schedule C. Common freelance categories include:" },
      { type: "ul", items: [
        "Advertising (Line 8)",
        "Commissions and fees (Line 10) — This is where Upwork and Fiverr fees go.",
        "Contract labor (Line 11) — If you outsource work to other freelancers.",
        "Legal and professional services (Line 17)",
        "Office expense (Line 18)",
        "Travel and meals (Lines 24a and 24b)"
      ]},
      { type: "h2", text: "End-of-Year Review" },
      { type: "p", text: "If you follow this monthly workflow, your end-of-year review will be a breeze. Instead of frantically digging through old emails for software receipts in April, you simply generate an annual profit and loss (P&L) statement from your accounting software and hand it to your CPA or plug the numbers directly into your tax filing software." }
    ]
  },
  {
    slug: "are-upwork-fees-tax-deductible",
    title: "Are Upwork Fees Tax-Deductible? Yes — Here's How to Claim Them",
    description: "Learn why platform fees from Upwork, Fiverr, and Stripe are fully tax-deductible and how to correctly report them on your IRS Schedule C.",
    category: "Quick Answers",
    publishedAt: "2026-05-08",
    readTime: 6,
    content: [
      { type: "p", text: "If you use freelance marketplaces like Upwork or Fiverr, you are intimately familiar with platform fees. Watching 10% or 20% of your hard-earned money vanish before it ever reaches your bank account is painful. However, there is a silver lining: platform fees are fully tax-deductible as ordinary and necessary business expenses." },
      { type: "h2", text: "Why It Matters" },
      { type: "p", text: "Many freelancers mistakenly believe they should only report the net amount they receive in their bank account as their gross income. This is technically incorrect according to IRS rules and can cause discrepancies if the platform issues a 1099-K based on gross receipts." },
      { type: "p", text: "You are required to report your total gross earnings (the full project price) as income, and then deduct the platform fees as an expense. While the net profit remains the same, accurately reporting gross income and deductions is vital for claiming certain credits and accurately maintaining your business records." },
      { type: "p", text: "To easily see the relationship between gross income, platform fees, and your final tax burden, use [the calculator on the home page]." },
      { type: "h2", text: "Where to Report Fees on Schedule C" },
      { type: "p", text: "When you file your taxes as a sole proprietor or single-member LLC, you use IRS Form 1040, Schedule C to report your business income and expenses. Platform fees should be reported on Line 10: Commissions and fees." },
      { type: "p", text: "This logic applies to all payment processing and platform costs, including:" },
      { type: "ul", items: [
        "Upwork's 10% service fees",
        "Fiverr's 20% commission",
        "Stripe, PayPal, or Square processing fees (typically 2.9% + 30¢)",
        "Bank wire transfer fees for receiving international client payments"
      ]},
      { type: "cta", text: "Calculate Your True Take-Home Pay" },
      { type: "h2", text: "A Worked Example" },
      { type: "p", text: "Let's assume you completed $50,000 worth of contracts on Upwork over the course of the tax year. Upwork took a flat 10% fee, meaning they withheld $5,000, and you received $45,000 in your bank account." },
      { type: "p", text: "When filing your Schedule C:" },
      { type: "ul", items: [
        "Part I, Line 1 (Gross receipts or sales): You enter $50,000.",
        "Part II, Line 10 (Commissions and fees): You enter $5,000."
      ]},
      { type: "p", text: "Your net profit (assuming no other expenses) is $45,000. You will only pay federal income tax and self-employment tax on that $45,000. The $5,000 you paid to Upwork is not taxed." },
      { type: "h2", text: "Keeping Accurate Records" },
      { type: "callout", text: "Tip: Do not rely solely on your 1099-K to determine your platform fees. Always download your annual transaction history or certificate of earnings directly from the platform's reporting dashboard." },
      { type: "p", text: "Upwork and Fiverr provide detailed annual reports that clearly break down your gross billings, service fees, withdrawal fees, and net earnings. Download these reports at the end of the year and keep them with your tax records to substantiate the deductions claimed on Line 10 of your Schedule C." }
    ]
  },
  {
    slug: "92-35-rule-explained",
    title: "The 92.35% Rule: Why You Don't Pay SE Tax on Your Full Earnings",
    description: "Discover how the IRS 92.35% rule saves freelancers money on self-employment taxes and how the math works in 2026.",
    category: "Tax Basics",
    publishedAt: "2026-05-12",
    readTime: 6,
    content: [
      { type: "p", text: "If you have ever tried to calculate your freelance taxes by simply multiplying your net profit by 15.3%, you probably arrived at a number higher than what your accountant or tax software told you. This discrepancy is due to a specific IRS provision known as the 92.35% rule. Understanding this rule is key to accurately projecting your tax liability." },
      { type: "h2", text: "The History Behind the Rule" },
      { type: "p", text: "To understand why the 92.35% rule exists, you have to look at how traditional W-2 employment works. For a W-2 employee, the payroll tax (FICA) is 15.3%, but it is split: the employee pays 7.65% and the employer pays 7.65%." },
      { type: "p", text: "Crucially, the employer is allowed to deduct their 7.65% portion as a business expense, meaning they do not pay corporate income tax on the money they used to pay the payroll tax. When the IRS created the self-employment (SE) tax for independent contractors, they wanted to equalize this treatment. Since freelancers act as both the employee and employer, the IRS allows you to simulate that employer deduction before calculating the tax." },
      { type: "p", text: "Rather than making you calculate a complex deduction, the IRS simplified the math: you only calculate SE tax on 92.35% of your net earnings (100% minus 7.65%). Our [calculator on the home page] applies this rule automatically to ensure you get an accurate estimate." },
      { type: "h2", text: "The Math in Action" },
      { type: "p", text: "Let's walk through a clear example. Assume your freelance business generated $100,000 in net profit (gross income minus all business expenses) for the year." },
      { type: "ul", items: [
        "Incorrect calculation: $100,000 × 15.3% = $15,300.",
        "Correct calculation (applying the rule): $100,000 × 0.9235 = $92,350.",
        "The $92,350 is your true taxable SE base.",
        "Now apply the tax rate: $92,350 × 15.3% = $14,129.55."
      ]},
      { type: "p", text: "Thanks to the 92.35% rule, your actual self-employment tax bill is $14,129.55, saving you nearly $1,200 compared to the incorrect flat calculation." },
      { type: "cta", text: "Calculate Your Accurate SE Tax" },
      { type: "h2", text: "Interaction with the Social Security Cap" },
      { type: "p", text: "The 92.35% rule also interacts with the Social Security wage base cap, which is $184,500 for the 2026 tax year. You only apply the 12.4% Social Security portion of the SE tax to earnings up to that cap." },
      { type: "p", text: "However, you use the adjusted SE base to determine if you hit the cap. For example, if your net profit is $195,000, you first multiply by 0.9235, resulting in an SE base of $180,082.50. Because this number is below the $184,500 cap, your entire base is subject to the Social Security tax, even though your raw net profit exceeded the cap." },
      { type: "callout", text: "Warning: Many rudimentary online tax calculators fail to implement the 92.35% rule properly, resulting in inflated SE tax estimates. Always verify that a calculator reduces your taxable base before applying the 15.3% rate." }
    ]
  },
  {
    slug: "safe-harbor-rules-high-income-freelancers-2026",
    title: "Estimated Tax Safe Harbor Rules for High-Income Freelancers (2026)",
    description: "Learn how high-income freelancers can use IRS safe harbor rules to avoid underpayment penalties, including the 110% rule for 2026.",
    category: "Tax Basics",
    publishedAt: "2026-05-15",
    readTime: 8,
    content: [
      { type: "p", text: "Freelance income is notoriously unpredictable. You might make $5,000 one month and $25,000 the next. This volatility makes it incredibly difficult to accurately predict your total annual income for quarterly estimated tax payments. If you guess wrong and underpay the IRS, you face hefty underpayment penalties. Fortunately, the IRS provides \"safe harbor\" rules to protect you." },
      { type: "p", text: "To plan your quarterly payments accurately based on your current projections, use [the calculator on the home page] to generate a customized quarterly schedule." },
      { type: "h2", text: "What is a Tax Safe Harbor?" },
      { type: "p", text: "A safe harbor is a legal provision that reduces or eliminates liability as long as certain conditions are met. In the context of estimated taxes, if you meet the safe harbor requirements, the IRS will not charge you an underpayment penalty, even if you owe a massive tax bill when you file your return in April." },
      { type: "h2", text: "The Standard Safe Harbor Rules" },
      { type: "p", text: "For most taxpayers, you can avoid penalties if your total tax payments for the year (including withholding and quarterly estimated payments) equal at least one of the following:" },
      { type: "ul", items: [
        "Rule 1: 90% of the tax you owe for the current year.",
        "Rule 2: 100% of the tax shown on your return for the prior year."
      ]},
      { type: "p", text: "Rule 2 is generally the easiest to follow for freelancers. Because you already know exactly what your tax bill was last year, you can simply divide that number by four and pay that amount each quarter. Even if your income doubles this year, you will owe a large balance in April, but you will not owe any penalties." },
      { type: "h2", text: "The 110% Rule for High-Income Earners" },
      { type: "p", text: "If you are a high-income freelancer, the rules become stricter. If your Adjusted Gross Income (AGI) on your prior year's tax return was more than $150,000 (or more than $75,000 if you are married filing separately), the 100% safe harbor rule does not apply to you." },
      { type: "p", text: "Instead, you must pay 110% of the tax shown on your prior year's return to satisfy the safe harbor requirement." },
      { type: "cta", text: "Plan Your Quarterly Payments" },
      { type: "h2", text: "A Worked Example" },
      { type: "p", text: "Assume you are a successful freelance developer. On your 2025 tax return, your AGI was $250,000, and your total tax liability was $60,000. Because your AGI exceeded the $150,000 threshold, you are subject to the high-income safe harbor rules for 2026." },
      { type: "p", text: "To avoid penalties in 2026, you must pay 110% of your 2025 tax liability." },
      { type: "p", text: "$60,000 × 110% = $66,000." },
      { type: "p", text: "You must pay $66,000 in estimated taxes evenly over the four quarters of 2026 (i.e., $16,500 per quarter). If you make these payments, you are shielded from penalties, even if your 2026 freelance business explodes and your actual tax liability ends up being $100,000. You will still have to write a check for the remaining $34,000 in April 2027, but the IRS will not penalize you." },
      { type: "callout", text: "Cash Flow Warning: While relying on the safe harbor rule protects you from penalties, you must ensure you are actually saving enough cash to cover the massive tax bill that will come due in April if your income increased significantly." },
      { type: "h2", text: "What Happens If You Miss It?" },
      { type: "p", text: "If you fail to meet the safe harbor requirements, the IRS will calculate an underpayment penalty based on how much you underpaid and how long the payment was overdue. The penalty is essentially an interest charge on the underpaid amount, and the rate fluctuates based on the federal short-term rate." }
    ]
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find(post => post.slug === slug);
}

export function getAllCategories(): string[] {
  const cats = new Set(POSTS.map(p => p.category));
  return Array.from(cats).sort();
}
