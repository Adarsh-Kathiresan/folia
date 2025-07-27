import React, { useState, useRef, useEffect } from "react";

type EditableInputProps = {
    value: string;
    edit: boolean;
    onInputUpdate: (newInput: number) => void;
    formatInput?: (value: string) => string;
};


const EditableInput = ({ value, edit, onInputUpdate, formatInput }: EditableInputProps) => {

    const [isEditing, setIsEditing] = useState(false);
    const [valueValue, setInputValue] = useState(value.toString());
    const valueRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setInputValue(value.toString());
    }, [value]);

    useEffect(() => {
        if (isEditing && valueRef.current) {
            valueRef.current.focus();
        }
    }, [isEditing]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleCheckboxClick = () => {
        const parsed = parseFloat(valueValue);
        if (!isNaN(parsed)) {
            onInputUpdate(parsed);
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
                    {formatInput ? formatInput(value) : value}
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
                            className="value-pencil"
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
                        ref={valueRef}
                        type="number"
                        value={valueValue}
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
                        aria-label="Confirm value"
                    />
                </>
            )}
            <style>
                {`
                    span:hover .value-pencil {
                        visibility: visible;
                        pointer-events: auto;
                    }
                `}
            </style>
        </span>
    );
};

export default EditableInput;
