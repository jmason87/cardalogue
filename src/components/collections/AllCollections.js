import React, { useEffect, useState } from "react"
import { getCollections, deleteCollection } from "./CollectionManager"
import { useHistory, Link } from "react-router-dom"
import { getCurrentUser } from "../users/UserManager"


export const AllCollections = () => {
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
            {
                collections.map((c) => {
                    return <>
                        {
                            currentUser.id === c.user.id
                                ? ""
                                : <div>
                                <h1 key={`c--${c.id}`}>{c.name}</h1>
                                <h3>Owner: <Link to={`user/${c.user?.id}`}>{c.user?.username}</Link></h3>
                                <div>
                                    <Link to={`/collections/${c.id}`}>View</Link>
                                </div>
                            </div>
                        }
                    </>
                })
            }
        </>
    )
}