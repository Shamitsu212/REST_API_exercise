import { useState } from "react";
import type { Post } from "./Post";

export function usePost() {

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    async function getPost(id:number){

        setLoading(true)
        setError(null)

        try{

            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`,
                {method: "GET"}
            )

            if(!response.ok){
                throw new Error("Ошибка")
            }

            const data :Post = await response.json()
            return data
        }
        
        catch(err){
            setError(err instanceof Error ? err.message : "Ошибка")
        }
        finally{
            setLoading(false)
        }
    }

    return{error, loading, getPost}

}