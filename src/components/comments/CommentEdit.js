import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getCurrentUser } from "../users/UserManager"
import { createCollectionComments, getCollectionComments, getSingleCollectionComments, updateCollectionComments } from "./CommentManager"


export const CommentEdit = () => {
    const history = useHistory()
    const { commentId } = useParams()
    const parsedCommentId = parseInt(commentId)
    const [comment, setComment] = useState({})
    const [content, setNewContent] = useState("")

    useEffect(() => {
        getSingleCollectionComments(parsedCommentId).then(setComment)
    }, [])

    const submitEditedComment = (evt) => {
        evt.preventDefault()
        const submitEdit = {
            content: content,
            date: comment.date,
            posted_by: comment.posted_by?.id,
            collection: comment.collection?.id
        }
        updateCollectionComments(submitEdit, parsedCommentId)
            .then(() => {history.push(`/comments/${comment.collection?.id}`)})
    }
    console.log(comment)
    return (
        <>
            <h1>Edit Comment</h1>
            <div>
                <textarea
                    className="textarea"
                    defaultValue={comment.content}
                    onChange={
                        (evt) => {
                            let copy = { ...content }
                            copy = evt.target.value
                            setNewContent(copy)
                        }}
                    required autoFocus
                ></textarea>
            </div>
            <div>
                <button onClick={submitEditedComment}>Save</button>
            </div>
        </>
    )
}