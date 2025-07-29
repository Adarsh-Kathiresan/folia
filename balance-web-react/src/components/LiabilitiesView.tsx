import type { Loan } from "../models/Budget";


type LiabilitiesViewProps = {
    liabilities: Loan[];
    onUpdate: (updatedLoan: Loan[]) => void;
};

const LiabilitiesView = ({ liabilities, onUpdate }: LiabilitiesViewProps) => {
    return (
        <div>
            <h2>Liabilities</h2>
            <table style={{ width: "100%"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Total Amount</th>
                        <th>Monthly Payment</th>
                        <th>End Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {liabilities.map((liability, idx) => (
                        <tr key={idx}>
                            <td>{liability.name}</td>
                            <td>${liability.totalAmount.toLocaleString()}</td>
                            <td>${liability.monthlyPayment.toLocaleString()}</td>
                            <td>{liability.endDate}</td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => {
                                        const updated = liabilities.filter((_, i) => i !== idx);
                                        onUpdate(updated);
                                    }}
                                    aria-label="Delete Liability"
                                    style={{ marginLeft: 8, color: "red", cursor: "pointer" }}
                                >
                                    🗑️
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        // Save logic here (if editing is implemented)
                                    }}
                                    aria-label="Save Liability"
                                    style={{ marginLeft: 8, color: "green", cursor: "pointer" }}
                                >
                                    ✔️
                                </button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={7} style={{ textAlign: "center" }}>
                            <button
                                type="button"
                                onClick={() => {
                                    const emptyLoan: Loan = {
                                        id: Date.now().toString(),
                                        name: Date.now().toString(),
                                        totalAmount: 0,
                                        monthlyPayment: 0,
                                        startDate: "",
                                        endDate: "",
                                        priority: "optional",
                                        notes: "",
                                    };
                                    // @ts-ignore
                                    onUpdate([...liabilities, emptyLoan]);
                                }}
                                aria-label="Add Liability"
                                style={{ fontSize: "1.2em", cursor: "pointer" }}
                            >
                                ➕
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default LiabilitiesView;