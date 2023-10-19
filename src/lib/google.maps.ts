"use server"
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const BASE_URL = "https://maps.googleapis.com/maps/api";

export const getCoordinates = async (address:string) => {
    try{
        const response = await fetch(`${BASE_URL}/geocode/json?address=${address}&key=${API_KEY}`)
        const data = await response.json()
        const { lat, lng } = data.results[0].geometry.location;
        return { lat, lng };
        
    }catch(err){
        return null
    }
}

export const getDistance = async (where:string, from:string) => {
    try{
        const response = await fetch(`${BASE_URL}/distancematrix/json?units=metric&origins=${from}&destinations=${where}&key=$`)

        const data = await response.json()
        const { distance } = data.rows[0].elements[0];
        return data
    }catch(err){
        return null
    }
}