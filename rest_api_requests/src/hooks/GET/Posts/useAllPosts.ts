import { useEffect, useState } from "react";
import type { Post } from "./Post";



export function useAllPosts() {
    
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [posts, setPosts] = useState<Post[]>([])


    useEffect(() => {

        async function getAllPosts() {
            
            try{

                setLoading(true)
                setError(null)

                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts",
                    {method: "GET"}
                )

                if(!response.ok){
                    throw new Error("Ошибка")
                }

                const data :Post[] = await response.json()
                setPosts(data)
            }

            catch(err){
                setError(err instanceof Error ? err.message : "Ошибка")
            }
            finally{
                setLoading(false)
            }

        }
        
        getAllPosts()

    }, [])

    

    return{ error, loading, posts}
}