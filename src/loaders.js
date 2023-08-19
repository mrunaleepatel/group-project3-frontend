import {baseUrl} from "./base_url";

export const placesLoader = async () => {
    const response = await fetch(`${baseUrl}/places`)
    const places = await response.json()
    return places
}

export const placeLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(`${baseUrl}/places/${id}`)
    const place = await response.json()
    return place
}
