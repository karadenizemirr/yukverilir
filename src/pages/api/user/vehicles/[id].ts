import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function GET(req:NextApiRequest, res:NextApiResponse){
    if (req.method !== 'GET') return res.status(405).end();

    const { id } = req.query;
    
    const vehicles = await prisma.user.findUnique(
        {
            where: {
                id: id as string
            },
            include:{
                vehicles: {
                    include:{
                        where:{
                            include:{
                                coordinates: true
                            }
                        },
                        to: {
                            include:{
                                coordinates: true
                            }
                        }
                    }
                }
            }

        }
    )

    return res.status(200).json(vehicles);
}