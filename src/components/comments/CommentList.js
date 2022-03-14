import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { deleteCollectionComments, getCollectionComments } from "./CommentManager"


export const CommentList = () => {
    const [comments, setComments] = useState([])

    const { collectionId } = useParams()
    const parsedId = collectionId
    const history = useHistory()

    useEffect(() => {
        getCollectionComments().then(setComments)
    }, [])

    return (
        <>
            <h1>Comments</h1>
            <button onClick={() => { history.push(`/commentform/${parsedId}`) }}>Add Comment</button>
            {
                comments.map((comment) => {
                    return <>
                        <ul>
                            <li>{comment.content}</li>
                            <li>Posted on: {comment.date}</li>
                            <li>Posted by: {comment.posted_by?.username}</li>
                        </ul>
                        <button onClick={() => {deleteCollectionComments(comment.id).then(setComments)}}>Delete Comment</button>
                    </>
                })
            }
        </>
    )
}