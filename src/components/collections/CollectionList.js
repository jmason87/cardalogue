import React, { useEffect, useState } from "react"
import { getCollections, deleteCollection } from "./CollectionManager"
import { useHistory, Link } from "react-router-dom"
import { getCurrentUser } from "../users/UserManager"


export const CollectionList = () => {
    const [collections, setCollections] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    const history = useHistory()

    useEffect(() => {
        getCollections().then(setCollections)
    }, [])

    useEffect(() => {
        getCurrentUser().then(setCurrentUser)
    }, [])

    return (
        <>
            <button onClick={() => { history.push("./collectionform") }}>Add New Collection</button>
            {
                collections.map((c) => {
                    return <>
                        {
                            currentUser.id === c.user.id
                                ? <div>
                                    <h1 key={`c--${c.id}`}>{c.name}</h1>
                                    <div>
                                        <Link to={`/collections/${c.id}`}>View</Link>
                                        <button onClick={() => { deleteCollection(c.id).then(setCollections) }}>Delete</button>
                                    </div>
                                </div>
                                : ""
                        }
                    </>
                })
            }
        </>
    )
}