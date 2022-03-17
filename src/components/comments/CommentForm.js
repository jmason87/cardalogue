import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getCurrentUser } from "../users/UserManager"
import { createCollectionComments, getCollectionComments } from "./CommentManager"


export const CommentForm = () => {
    const [currentUser, setCurrentUser] = useState({})

    const { collectionId } = useParams()
    const parsedId = collectionId
    const history = useHistory()
    const date = new Date()

    const [comment, setComment] = useState({
        content: "",
        date: date.toISOString().split('T')[0],
        posted_by: 0,
        collection: 0,
    })

    useEffect(() => {
        getCurrentUser().then(setCurrentUser)
    }, [])

    const submitComment = (e) => {
        e.preventDefault()
        const newComment = {
            content: comment.content,
            date: comment.date,
            posted_by: currentUser,
            collection: parsedId
        }
        createCollectionComments(newComment).then(history.push(`/comments/${parsedId}`))
    }

    return (
        <>
            <h1>Comment Form</h1>
            <div>
            <button onClick={() =>{history.push(`/comments/${parsedId}`)}}>Back to Comments</button>
            </div>
            <label>New Comment? </label>
            <input
                type="text"
                placeholder="type comment here"
                onChange={(e) => {
                    const copy = { ...comment }
                    copy.content = e.target.value
                    setComment(copy)
                }} />
            <button onClick={submitComment}>Submit Comment</button>
        </>
    )
}