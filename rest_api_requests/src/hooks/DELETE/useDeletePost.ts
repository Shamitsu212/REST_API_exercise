import { useState } from "react";

export function useDeletePost(){

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    async function deletePost(id:number){
        try{

            setLoading(true)
            setError(null)

            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`,
                {method: "DELETE"}
            )
            if(!response.ok){
                throw new Error("Ошибка")
            }

            return response.status
        }

        catch(err){
            setError(err instanceof Error ? err.message : "Ошибка")
        }
        finally{
            setLoading(false)
        }
    }

    return{loading, error, deletePost}
}