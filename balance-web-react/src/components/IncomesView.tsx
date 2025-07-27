import type { Income } from "../models/Budget";
import AmountView from "./common/AmountView";

type IncomesViewProps = {
    incomes: Income[];
    onUpdate: (updatedIncomes: Income[]) => void;
};

const IncomesView = ({ incomes, onUpdate }: IncomesViewProps) => {
    return (
        <div>
            <h2>Incomes</h2>
            <ul>
                {incomes.map((income, idx) => (
                    <li key={idx}>
                        <div className="flex items-center py-3 border-b border-b-gradient-to-r from-transparent via-gray-300 to-transparent">
                            <span className="flex-1 font-medium truncate">{income.source}</span>
                            <span className="w-24 text-right text-gray-700">${income.amount.toFixed(2)}</span>
                            <AmountView amount={income.amount} edit={true} onAmountUpdate={(newAmount) => {
                                onUpdate(incomes.map((income, mapIndex) => (
                                    idx === mapIndex ? { ...income, amount: newAmount } : income
                                )));
                            }} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IncomesView;