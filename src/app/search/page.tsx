import SearchContainer from "@/container/search.container";
import { store } from "@/redux";
import { Metadata } from "next";
import React from "react";

export const metadata:Metadata = {
    title: 'Arama Sonuçları',
    description: 'Yükverilirarama sonuçları',
    keywords: 'yükverilir, yükver'
}

export default function SearchPage(){
    return (
        <div className="container mx-auto" >
            <SearchContainer />
        </div>
    )
}