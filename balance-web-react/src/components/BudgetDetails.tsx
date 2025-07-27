import type { Budget } from "../models/Budget";
import ExpensesView from "./ExpensesView";
import IncomesView from "./IncomesView";

type BudgetDetailsProps = {
    budget: Budget;
};

const editblockClassNames = " border rounded-xl p-2";

const BudgetDetails = ({ budget }: BudgetDetailsProps) => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-4">
                <div className={editblockClassNames}>
                     <IncomesView
                        incomes={budget.incomes}
                        onUpdate={(updatedIncomes) => {
                            // Here you would typically update the budget with the new incomes
                            console.log("Updated Incomes:", updatedIncomes);
                        }}
                    />
                    
                </div>
                <div className={editblockClassNames}>
                    <ExpensesView
                        expenses={budget.expenses}
                        onUpdate={(updatedExpenses) => {
                            // Here you would typically update the budget with the new expenses
                            console.log("Updated Expenses:", updatedExpenses);
                        }}
                    />
                </div>
            </div>
            
        </div>
    );
};

export default BudgetDetails;
