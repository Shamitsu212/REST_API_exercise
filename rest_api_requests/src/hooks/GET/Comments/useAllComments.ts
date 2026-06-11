import { useState, useEffect } from "react";
import type { Comment } from "./Comment";

export function useAllComments(){

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [comments, setComments] = useState<Comment[]>([])

    useEffect(() => {
        async function getAllComments() {

            try{

                setLoading(true)
                setError(null)

                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/comments",
                    {method: "GET"}
                )

                if(!response.ok){
                    throw new Error("Ошибка")
                }

                const data :Comment[] = await response.json()
                setComments(data)
            }

            catch(err){
                setError(err instanceof Error ? err.message : "Ошибка")
            }
            finally{
                setLoading(false)
            }

        }

        getAllComments()

    }, [])

    return{loading, error, comments}
}