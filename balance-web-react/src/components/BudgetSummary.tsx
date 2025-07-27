import type { NetWorthSummary } from "../models/Budget";

interface BudgetSummaryProps {
    summary: NetWorthSummary;
}

const BudgetSummary = ({ summary }: BudgetSummaryProps) => {

    return (
       <div>
            <p>Assets: ${summary.totalAssets}</p>
            <p>Liabilities: ${summary.totalLiabilities}</p>
            <p>Net Worth: ${summary.netWorth}</p>
        </div>
    );
};

export default BudgetSummary;