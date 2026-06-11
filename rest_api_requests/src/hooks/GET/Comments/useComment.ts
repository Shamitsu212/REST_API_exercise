import { useState } from "react";
import type { Comment } from "./Comment";

export function useComment(){

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    async function getComment(id:number) {
        try{
            
            setLoading(true)
            setError(null)

            const response = await fetch(
                `https://jsonplaceholder.typicode.com/comments/${id}`,
                {method: "GET"}
            )
            if(!response.ok){
                throw new Error("Ошибка")
            }

            const data :Comment = await response.json()
            return data
        }

        catch(err){
            setError(err instanceof Error ? err.message : "Ошибка")
        }
        finally{
            setLoading(false)
        }

    }

    return{loading, error, getComment}
}