import { useState } from "react";

export function usePatchPost(){

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    async function patchPost(id:number, body:string) {

        try{
            setLoading(true)
            setError(null)

            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`,
                {
                    method: "PATCH",
                    headers: { "Content-type": "application/json"},
                    body: JSON.stringify({
                        body: body
                    }),
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

    return{loading, error, patchPost}

}