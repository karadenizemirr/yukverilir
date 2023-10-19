import Image from "next/image";
import React from "react";

export default function AboutPage() {
    return (
        <div className="about">
            <div className="relative grid grid-cols-1 sm:grid-cols-2 items-center">
                <div className="text px-24 text-center">
                    <h1 className="text-7xl font-bold mb-10" >
                        Hedefimiz
                    </h1>
                    <h1>
                    Yük veren kişi ve firmaların, lojistik firmaları ile iletişim kurabilmelerini olanak tatımak, her iki taraf için akıllı, güvenli ve erişilebilir hale getirmek. Sadece dijital bir lojistik platformun oluşturulmasında değil, aynı zamanda küçük ve orta ölçekli işletmelerin geliştirilmesi için fırsatların genişletilmesini olanak tanımak. Taşıyıcılar ile yük göndericileri tek bir dijital alanda birleştirmek. Zaman tasarufu ve yüksek verimlilik sağlamak.

                    </h1>
                </div>
                <div className="img">
                    <Image src="/images/about.png" alt="" className="w-full" width={500} height={500} quality={100} />
                </div>
            </div>
        </div>
    )
}