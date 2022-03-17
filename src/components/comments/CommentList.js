import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { getCurrentUser } from "../users/UserManager"
import { deleteCollectionComments, getCollectionComments } from "./CommentManager"


export const CommentList = () => {
    const [comments, setComments] = useState([])
    const [currentUser, setCurrentUser] = useState({})

    const { collectionId } = useParams()
    const parsedId = collectionId
    const history = useHistory()

    useEffect(() => {
        getCollectionComments().then(setComments)
    }, [])

    useEffect(() => {
        getCurrentUser().then(setCurrentUser)
    }, [])

    return (
        <>
            <h1>Comments</h1>
            <button onClick={() => { history.push(`/commentform/${parsedId}`) }}>Add Comment</button>
            <button onClick={() => {history.push(`/collections/${parsedId}`)}}>Back to Collection</button>
            {
                comments.map((comment) => {
                    return <>
                        {  
                            comment.collection?.id === parseInt(parsedId)
                                ? <ul>
                                    <li>{comment.content}</li>
                                    <li>Posted on: {comment.date}</li>
                                    <li>Posted by: {comment.posted_by?.username}</li>
                                    {   //only admins and creators of the comment can delete that comment
                                        currentUser.is_staff || currentUser.id === comment.posted_by?.id
                                            ? <button onClick={() => {deleteCollectionComments(comment.id).then(setComments)}}>Delete Comment</button>
                                            : ""
                                    }
                                    {   // on users who created comment can edit comment
                                        currentUser.id === comment.posted_by?.id
                                            ? <button onClick={() => {history.push(`/editcomment/${comment.id}`)}}>Edit Comment</button>
                                            : ""
                                    }
                                 </ul>
                                : ""
                        }
                    </>
                })
            }
        </>
    )
}