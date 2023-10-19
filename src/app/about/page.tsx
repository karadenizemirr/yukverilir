import React from "react";

export default function AboutPage() {
    return (
        <div className="container mx-auto flex justify-center mt-20" >
            <div className="about-card shadow-lg p-10 w-1/2 flex flex-col gap-6">
                <h1 className="uppercase text-4xl font-black text-center">
                    Hedefimiz
                </h1>
                <p className="text-center">
                    Yük veren kişi ve firmaların, lojistik firmaları ile iletişim kurabilmelerini olanak tatımak, her iki taraf için akıllı, güvenli ve erişilebilir hale getirmek. Sadece dijital bir lojistik platformun oluşturulmasında değil, aynı zamanda küçük ve orta ölçekli işletmelerin geliştirilmesi için fırsatların genişletilmesini olanak tanımak. Taşıyıcılar ile yük göndericileri tek bir dijital alanda birleştirmek. Zaman tasarufu ve yüksek verimlilik sağlamak.
                </p>
            </div>
        </div>
    )
}