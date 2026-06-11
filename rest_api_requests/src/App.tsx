import { useEffect } from 'react'
import './App.css'

// GET
import { useAllPosts } from './hooks/GET/Posts/useAllPosts'
import { usePost } from './hooks/GET/Posts/usePost'
import { useAllComments } from './hooks/GET/Comments/useAllComments'
import { useComment } from './hooks/GET/Comments/useComment'

//DELETE
import { useDeletePost } from './hooks/DELETE/useDeletePost'

//POST
import { useAddNewPost } from './hooks/POST/useAddNewPost'

//PUT
import { usePutPost } from './hooks/PUT/usePutPost'

//PATH
import { usePatchPost } from './hooks/PATCH/usePatchPost'

function App() {

  /* Все комменты
  const {comments} = useAllComments()

  useEffect(() => {
    
    console.log(comments)

  }, [comments]) */

  /* Один коммент
  const { getComment } = useComment()

  useEffect(() => {

    async function loadComment(){
      const comment = await getComment(1)
      console.log(comment)
    }

    loadComment()

  },[]) */

  /*Все посты
  const { posts } = useAllPosts()

  useEffect(() => {
    
    console.log(posts)

  }, [posts]) */

  /* Один пост
  const { getPost } = usePost()

  useEffect(() => {
    
    async function loadPost() {
      const post = await getPost(1)
      console.log(post)
    }

    loadPost()

  }, []) */

  /* Удалить пост
  const { deletePost } = useDeletePost()

  useEffect(() => {
    
    async function deleteP() {
      const post = await deletePost(1)
      console.log(post)
    }

    deleteP()

  }, []) */

  /* Новый пост
  const { NewPost } = useAddNewPost()

  const post = {userId: 1, id: 2, title: "name", body: "text"}

  useEffect(() => {
    
    async function NewP() {
      NewPost(post)
    }

    NewP()

  }, []) */

  /* Полная замена поста по id
  const { putPost } = usePutPost()

  const post = {userId: 1, id: 2, title: "name", body: "text"}

  useEffect(() => {
    
    async function Put() {
      putPost(3, post)
    }

    Put()

  }, []) */

  /* Замена body поста
  const { patchPost } = usePatchPost()

  const body = "new body"

  useEffect(() => {
    
    async function Patch() {
      patchPost(3, body)
    }

    Patch()

  }, []) */


  return (
    <div>
      
    </div>
  )
}

export default App
