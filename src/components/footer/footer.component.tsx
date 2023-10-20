import React from "react";
import InputComponent from "../form/input.component";
import Image from "next/image";

export default function FooterComponent(){
    return (
        <div className="footer mt-10  border-t-2 border-primary bg-primary text-white">
            <div className="content p-10">
                <div className="logo flex flex-1 justify-center">
                    <Image src="/images/logo2.png" alt="" width={200} height={200} />
                </div>
                <div className="bottom flex justify-center mt-10">
                    <p>
                        TÜm Hakları Saklıdır. 2023
                    </p>
                </div>
            </div>
        </div>
    )
}