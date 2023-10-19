import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req:NextApiRequest, res:NextApiResponse){
    if (req.method !== 'POST') return res.status(405).end();

    const data = req.body;

    if (data?.category === 'Araç'){
        // Vehicles Search
        const vehicles = await prisma.vehicles.findMany({
            include: {
                user: true,
                where: {
                    include: {
                        coordinates: true
                    }
                },
                to:{
                    include: {
                        coordinates: true
                    }
                }
            }
        })

        return res.status(200).send(vehicles);
    }else if (data?.category === 'Yük'){
        // Advert Search
        const advert = await prisma.advert.findMany({
            include: {
                user: true,
                where: {
                    include: {
                        coordinates: true
                    }
                },
                to:{
                    include: {
                        coordinates: true
                    }
                }
            }
        })
        return res.status(200).send(advert);
    }

    return res.status(400).end();
}