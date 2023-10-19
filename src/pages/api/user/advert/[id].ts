import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import React from "react";

export default async function GET(req:NextApiRequest, res:NextApiResponse){
    if (req.method !== 'GET') return res.status(405).end();

    const { id } = req.query;

    const advert = await prisma.user.findUnique(
        {
            where: {
                id: id as string
            },
            include: {
                adverts: {
                    include:{
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
            }
        }
    )

    if (!advert) return res.status(404).end();

    res.status(200).json(advert);
}