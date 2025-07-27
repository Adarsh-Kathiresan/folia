import React, { useState, useRef, useEffect } from "react";

type AmountViewProps = {
    amount: number;
    edit: boolean;
    onAmountUpdate: (newAmount: number) => void;
};

const formatAmount = (amount: number) =>
    amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const AmountView = ({ amount, edit, onAmountUpdate }: AmountViewProps) => {

    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(amount.toString());
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setInputValue(amount.toString());
    }, [amount]);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleCheckboxClick = () => {
        const parsed = parseFloat(inputValue);
        if (!isNaN(parsed)) {
            onAmountUpdate(parsed);
            setIsEditing(false);
        }
    };

    return (
        <span
            style={{ display: "inline-flex", alignItems: "center", position: "relative" }}
            onMouseLeave={() => setIsEditing(false)}
        >
            {!isEditing ? (
                <span
                    style={{ display: "inline-flex", alignItems: "center", cursor: edit ? "pointer" : "default" }}
                    onMouseEnter={() => {}}
                    onClick={edit ? handleEditClick : undefined}
                >
                    {formatAmount(amount)}
                    {edit && (
                        <span
                            style={{
                                marginLeft: 6,
                                opacity: 0.6,
                                visibility: "hidden",
                                transition: "visibility 0.2s",
                                pointerEvents: "none",
                                position: "absolute",
                                right: -24,
                            }}
                            className="amount-pencil"
                        >
                            {/* Pencil SVG icon */}
                            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <path
                                    d="M11.293 2.293a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1 0 1.414l-7.5 7.5-2.207.793.793-2.207 7.5-7.5z"
                                    stroke="#888"
                                    strokeWidth="1.2"
                                    fill="none"
                                />
                            </svg>
                        </span>
                    )}
                </span>
            ) : (
                <>
                    <input
                        ref={inputRef}
                        type="number"
                        value={inputValue}
                        onChange={handleInputChange}
                        style={{ width: 80, marginRight: 8 }}
                        min="0"
                        step="0.01"
                    />
                    <input
                        type="checkbox"
                        onChange={handleCheckboxClick}
                        checked={false}
                        style={{ cursor: "pointer" }}
                        aria-label="Confirm amount"
                    />
                </>
            )}
            <style>
                {`
                    span:hover .amount-pencil {
                        visibility: visible;
                        pointer-events: auto;
                    }
                `}
            </style>
        </span>
    );
};

export default AmountView;
