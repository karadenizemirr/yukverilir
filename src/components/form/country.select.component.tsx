import { countryData } from "@/utils/country.data";
import { Field } from "formik";
import React, { useState } from "react";

interface CountrySelectProps {
    name: string;
    placeholder: string;
    onchange: (value: string) => void;
    value: string;
}

export default function CountrySelectComponent({ name, placeholder, onchange, value }: CountrySelectProps) {
    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onchange(e.target.value);
    };

    return (
        <select name={name} id={name} value={value} onChange={handleOnChange} className="border-2 border-primary p-2 w-full rounded-lg">
            <option value="">{placeholder}</option>
            {countryData.data.map((country: any, index: any) => (
                <option key={index} value={country.il_adi}>
                    {country.il_adi}
                </option>
            ))}
        </select>
    );
}