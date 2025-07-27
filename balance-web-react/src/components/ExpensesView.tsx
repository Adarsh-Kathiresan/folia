import type { Expense } from "../models/Budget";
import AmountView from "./common/AmountView";

type ExpensesViewProps = {
    expenses: Expense[];
    onUpdate: (updatedExpenses: Expense[]) => void;
};

const ExpensesView = ({ expenses, onUpdate }: ExpensesViewProps) => {
    return (
        <div>
            <h2>Expenses</h2>
            <ul>
                {expenses.map((expense, idx) => (
                    <li key={idx}>
                        <div className="flex items-center py-3 border-b border-b-gradient-to-r from-transparent via-gray-300 to-transparent">
                            <span className="w-20 text-gray-500 text-sm">
                                {expense.dueDate ? new Date(expense.dueDate).toLocaleDateString(undefined, { day: '2-digit', month: 'short' }) : ''}
                            </span>
                            <span className="flex-1 font-medium truncate">{expense.name}</span>
                            <span className="w-20 text-center text-xs text-gray-400">{expense.priority}</span>
                            <span className="w-24 text-right text-gray-700">${expense.amount.toFixed(2)}</span>
                            <AmountView amount={expense.amount} edit={true} onAmountUpdate={(newAmount) => {
                                onUpdate(expenses.map((expense, mapIndex) => (
                                    idx === mapIndex ? { ...expense, amount: newAmount } : expense
                                )));
                            }} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpensesView;