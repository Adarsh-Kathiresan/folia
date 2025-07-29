import type { Budget } from "../models/Budget";
import AssetsView from "./AssetsView";
import ExpensesView from "./ExpensesView";
import IncomesView from "./IncomesView";
import LiabilitiesView from "./LiabilitiesView";

type BudgetDetailsProps = {
    budget: Budget;
    updateBudget: (updatedBudget: Partial<Budget>) => void;
};

const editblockClassNames = " border rounded-xl p-2";

const BudgetDetails = ({ budget, updateBudget }: BudgetDetailsProps) => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-4">
                <div className={editblockClassNames}>
                     <IncomesView
                        incomes={budget.incomes}
                        onUpdate={(updatedIncomes) => {
                            updateBudget({ incomes: updatedIncomes });
                        }}
                    />
                    
                </div>
                <div className={editblockClassNames}>
                    <ExpensesView
                        expenses={budget.expenses}
                        onUpdate={(updatedExpenses) => {
                            updateBudget({ expenses: updatedExpenses });
                        }}
                    />
                </div>
                <div className={editblockClassNames}>
                     <AssetsView
                        assets={budget.assetAccounts}
                        onUpdate={(updatedAssetAccounts) => {
                            updateBudget({ assetAccounts: updatedAssetAccounts });
                        }}
                    />
                    
                </div>
                <div className={editblockClassNames}>
                    <LiabilitiesView
                        liabilities={budget.loans}
                        onUpdate={(updatedLoans) => {
                            updateBudget({ loans: updatedLoans });
                        }}
                    />
                </div>
            </div>
            
        </div>
    );
};

export default BudgetDetails;
