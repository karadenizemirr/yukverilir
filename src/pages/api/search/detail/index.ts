import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function DetailApi(req:NextApiRequest, res:NextApiResponse){
    try{
        if (req.method !== 'POST') return res.status(405).json({ statusCode: 405, message: 'Method Not Allowed' });
        const { id } = req.body;
        const {category} = req.body

        if (category && category === 'advert'){
            const advert = await prisma.advert.findUnique(
                {
                    where:{
                        id: id as string
                    },
                    include: {
                        user: true,
                        where: {
                            include:{
                                coordinates: true
                            }
                        },
                        to: {
                            include: {
                                coordinates: true
                            }
                        }
                    }
                }
            )

            res.status(200).json({ statusCode: 200, ok: true, data: advert });
        }else if (category && category === 'vehicles'){
            const vehicle = await prisma.vehicles.findUnique(
                {
                    where:{
                        id: id as string
                    },
                    include: {
                        user: true,
                        where: {
                            include:{
                                coordinates: true
                            }
                        },
                        to: {
                            include: {
                                coordinates: true
                            }
                        }
                    }
                }
            )

            res.status(200).json({ statusCode: 200, ok: true, data: vehicle });
        }
    }catch(err){
        res.status(500).json({ statusCode: 500, message: err});
    }
}