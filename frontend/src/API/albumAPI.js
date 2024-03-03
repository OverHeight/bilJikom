import axios from "axios"
import { useEffect } from "react"

const baseUrl = "http://localhost:5000/album"

export const UseGetAlbum = () => {
    const response =
        useEffect(() => {
            axios.get(baseUrl).then((response) => console.log(response))
        })
    return response
}