export interface ProfitLoss {
  period_start: string;
  period_end: string;
  total_revenue: number;
  cogs: number;
  gross_profit: number;
  operating_expenses: {
    salaries: number;
    marketing: number;
    rent_utilities: number;
    depreciation: number;
    insurance: number;
    professional_fees: number;
  };
  operating_income: number;
  interest_expense: number;
  tax_expense: number;
  net_income: number;
}
