"use server"
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const BASE_URL = "https://maps.googleapis.com/maps/api";

export const getCoordinates = async (address: string) => {
    try {
        const response = await fetch(`${BASE_URL}/geocode/json?address=${address}&key=${API_KEY}`)
        const data = await response.json()
        const { lat, lng } = data.results[0].geometry.location;
        return { lat, lng };

    } catch (err) {
        return null
    }
}

export const getDistance = async (where: string, from: string) => {
    try {
        const apiKey = API_KEY as string;
        const directionsURL = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(
            from
        )}&destination=${encodeURIComponent(where)}&key=${encodeURIComponent(apiKey)}`;

        const response = await fetch(directionsURL);
        const data = await response.json();

        if (data.status === 'OK') {
            const duration = data.routes[0].legs[0].duration.text;
            console.log(duration)
            return duration; 
        } else {
            return null;
        }
    } catch (err) {
        return null;
    }
};