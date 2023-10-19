import React from "react";

interface SelectComponentProps {
    array: any[];
    name: string;
    placeholder?: string;
    onchange?: (value: string) => void;
    fields?: any;
}

export default function SelectComponent({ array, name, placeholder, onchange, fields }: SelectComponentProps) {
    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (onchange) {
            onchange(e.target.value);
        }
    };

    return (
        <select name={name} id={name} className="border-2 border-primary p-2 w-full rounded-lg" {...fields} onChange={handleOnChange}>
            <option value="">{placeholder}</option>
            {array.map((item: any, index: number) => (
                <option key={index} value={item}>
                    {item}
                </option>
            ))}
        </select>
    );
}