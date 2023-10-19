import { countryData } from "@/utils/country.data";
import React from "react";

interface DistrictSelectComponentProps {
    country: string;
    name: string;
    placeholder?: string;
    onchange?: (value: string) => void;
}

export default function DistrictSelectComponent({ country, name, placeholder, onchange }: DistrictSelectComponentProps) {
    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (onchange) {
            onchange(e.target.value);
        }
    };

    return (
        <select name={name} className="border-2 border-primary p-2 w-full rounded-lg" onChange={handleOnChange}>
            <option value="">{placeholder}</option>
            {countryData.data
                .filter((item: any) => item.il_adi === country)
                .map((item: any, index: any) =>
                    item.ilceler.map((district: any, index: any) => (
                        <option key={index} value={district.ilce_adi}>
                            {district.ilce_adi}
                        </option>
                    ))
                )}
        </select>
    );
}