import SearchContainer from "@/container/search.container";
import { store } from "@/redux";
import React from "react";

export default function SearchPage(){
    return (
        <div className="container mx-auto" >
            <SearchContainer />
        </div>
    )
}