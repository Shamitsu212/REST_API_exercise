import { useState } from "react";
import type { Post } from "../GET/Posts/Post";

export function usePutPost(){

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    async function putPost(id:number, post:Post) {

        try{
            setLoading(true)
            setError(null)

            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`,
                {
                    method: "PUT",
                    headers: { "Content-type": "application/json"},
                    body: JSON.stringify(post),
                }
            )

            if(!response.ok){
                throw new Error("Ошибка")
            }

            const data = await response.json()
            console.log(response.status)
            return data
        }

        catch(err){
            setError(err instanceof Error ? err.message : "Ошибка")
        }
        finally{
            setLoading(false)
        }
        
    }

    return{loading, error, putPost}

}