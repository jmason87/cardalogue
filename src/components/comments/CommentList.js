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
            <div className="container text-center mt-4">
                <h1>Comments</h1>
                <button className="btn btn-md btn-primary m-4" onClick={() => { history.push(`/commentform/${parsedId}`) }}>Add Comment</button>
                <button className="btn btn-md btn-primary m-4" onClick={() => { history.push(`/collections/${parsedId}`) }}>Back to Collection</button>
            </div>
            <div className="container">
                <div className="row row mt-4">
                    {
                        comments.map((comment) => {
                            return <>
                                {
                                    comment.collection?.id === parseInt(parsedId)
                                        ? <div className="col m-4">
                                            <div className="card bg-light text-center">
                                                <p>{comment.content}</p>
                                                <p>Posted on: {comment.date}</p>
                                                <p>Posted by: {comment.posted_by?.username}</p>
                                                <div>
                                                    {   //only admins and creators of the comment can delete that comment
                                                        currentUser.is_staff || currentUser.id === comment.posted_by?.id
                                                            ? <button className="btn btn-sm btn-danger m-4" onClick={() => { deleteCollectionComments(comment.id).then(setComments) }}>Delete Comment</button>
                                                            : ""
                                                    }
                                                    {   // on users who created comment can edit comment
                                                        currentUser.id === comment.posted_by?.id
                                                            ? <button className="btn btn-sm btn-warning m-4" onClick={() => { history.push(`/editcomment/${comment.id}`) }}>Edit Comment</button>
                                                            : ""
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        : ""
                                }
                            </>
                        })
                    }
                </div>
            </div>
        </>
    )
}