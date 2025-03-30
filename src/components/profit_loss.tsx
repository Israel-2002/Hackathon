interface ProfitLoss {
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

export default function ProfitLoss({
  period_start,
  period_end,
  total_revenue,
  cogs,
  gross_profit,
  operating_expenses,
  operating_income,
  interest_expense,
  tax_expense,
  net_income,
}: ProfitLoss) {
  // Formatting helper function
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2>Profit & Loss Statement</h2>
      <div style={{ marginBottom: "15px" }}>
        <div>
          Period: {new Date(period_start).toLocaleDateString()} -{" "}
          {new Date(period_end).toLocaleDateString()}
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Income</h3>
        <div>Total Revenue: {formatCurrency(total_revenue)}</div>
        <div>Cost of Goods Sold: {formatCurrency(cogs)}</div>
        <div style={{ fontWeight: "bold", marginTop: "10px" }}>
          Gross Profit: {formatCurrency(gross_profit)}
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Operating Expenses</h3>
        <div>Salaries: {formatCurrency(operating_expenses?.salaries)}</div>
        <div>Marketing: {formatCurrency(operating_expenses?.marketing)}</div>
        <div>
          Rent & Utilities: {formatCurrency(operating_expenses?.rent_utilities)}
        </div>
        <div>
          Depreciation: {formatCurrency(operating_expenses?.depreciation)}
        </div>
        <div>Insurance: {formatCurrency(operating_expenses?.insurance)}</div>
        <div>
          Professional Fees:{" "}
          {formatCurrency(operating_expenses?.professional_fees)}
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Other Items</h3>
        <div>Operating Income: {formatCurrency(operating_income)}</div>
        <div>Interest Expense: {formatCurrency(interest_expense)}</div>
        <div>Tax Expense: {formatCurrency(tax_expense)}</div>
      </div>

      <div style={{ marginTop: "25px", fontSize: "1.2em", fontWeight: "bold" }}>
        Net Income: {formatCurrency(net_income)}
      </div>
    </div>
  );
}
