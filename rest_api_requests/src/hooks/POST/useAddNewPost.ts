import { useState } from "react";
import type { Post } from "../GET/Posts/Post";

export function useAddNewPost(){

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    async function NewPost(post:Post) {

        try{

            setLoading(true)
            setError(null)

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(post)
                }
            )

            if(!response.ok){
                throw new Error("Ошибка")
            }

            const data :Post = await response.json()
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

    return{loading, error, NewPost}
}