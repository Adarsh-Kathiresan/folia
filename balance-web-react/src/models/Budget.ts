export type Budget = {
  id: string;
  name: string;
  expenses: Expense[];
  incomes: Income[];
  assetAccounts: AssetAccount[];
  loans: Loan[];
  netWorth: NetWorthSummary;
  projections: Projection[];
}

// Expense.ts
export type Expense = {
  id: string;
  name: string;               // "Rent", "Spotify", etc.
  amount: number;
  type: "fixed" | "variable";
  priority: "essential" | "optional";
  dueDate?: string;           // e.g. "2025-08-01"
  recurrence?: "monthly" | "weekly" | "yearly" | "once" | null;
  notes?: string;
};

// Income.ts
export type Income = {
  id: string;
  source: string;             // "Monthly Salary"
  amount: number;
  recurrence: "monthly";
  startDate?: string;
  notes?: string;
};

// AssetAccount.ts
export type AssetAccount = {
  id: string;
  name: string;               // "RRSP", "TFSA", "Bank - TD"
  type: "investment" | "cash";
  currentBalance: number;
  includeInNetWorth: boolean;  // usually true
  autoUpdate?: boolean;
  notes?: string;
};

// Loan.ts
export type Loan = {
  id: string;
  name: string;               // "Car Loan"
  totalAmount: number;
  monthlyPayment: number;
  startDate: string;
  endDate: string;
  priority: "essential" | "optional";
  notes?: string;
};

// NetWorth.ts (computed)
export type NetWorthSummary = {
  totalAssets: number;
  totalLiabilities: number;
  netWorth: number;
};

// Projection.ts (future-facing)
export type Projection = {
  targetAmount: number;
  estimatedSaveDate: string;
  currentTrajectory: "onTrack" | "delayed" | "ahead";
};
