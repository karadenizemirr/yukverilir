import React from "react";

export default function InputComponent({field,placeholder, name, value}:{placeholder?:string, field?:any, name?:string, value?:string}){
    return (
        <div className="input w-full">
            <input 
                name={name} 
                id={name} 
                type="text" 
                className="border-2 border-primary p-2 w-full rounded-lg" 
                placeholder={placeholder} 
                autoComplete="off" 
                value={value}
                {...field} 
                
                />
        </div>
    )
}