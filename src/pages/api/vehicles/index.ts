import { getCoordinates } from "@/lib/google.maps"
import prisma from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async function POST(req:NextApiRequest, res:NextApiResponse){
    try{
        if (req.method === 'POST'){
            const data = req.body
            const where_address = data.where_country +','+ data.where_district + ',Türkiye'
            const to_address = data.to_country +','+ data.to_district + ',Türkiye'
            const to_coordinates:any = await getCoordinates(to_address)
            const where_coordinates:any = await getCoordinates(where_address)

            const save = await prisma.vehicles.create(
                {
                    data:{
                        brand: data.brand,
                        model: data.model,
                        vehicles_case: data.vehicles_case,
                        vehicles_type: data.vehicles_type,
                        delivired_date: data.delivired_date,
                        where:{
                            create: {
                                coordinates:{
                                    create: {
                                        country: data.where_country,
                                        district: data.where_district,
                                        lat: String(where_coordinates.lat),
                                        lng: String(where_coordinates.lng)
                                    }
                                }
                            }
                        },
                        to:{
                            create: {
                                coordinates:{
                                    create: {
                                        country: data.to_country,
                                        district: data.to_district,
                                        lat: String(to_coordinates.lat),
                                        lng: String(to_coordinates.lng)
                                    }
                                }
                            }
                        },
                        user:{
                            connect: {
                                id: data.id
                            }
                        }
                    }
                }
            )

            return res.status(200).json({ok:true})
        }
    }catch(err){
        console.log(err)
        return res.status(400).json({ok:false})
    }
}