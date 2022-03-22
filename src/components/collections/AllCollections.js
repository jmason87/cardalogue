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
            <div className="container mt-4">
                <div className="row row-cols-3 mt-4">
                    {
                        collections.map((c) => {
                            return <>
                                {
                                    currentUser.id === c.user.id
                                        ? ""
                                        : <div className="col mt-4">
                                            <div className="card bg-light text-center">

                                                <h1 key={`c--${c.id}`}>{c.name}</h1>
                                                <h3 className="mt-4">Owner: <Link to={`user/${c.user?.id}`}>{c.user?.username}</Link></h3>
                                                <div>
                                                    <button className="btn btn-sm btn-primary m-4" onClick={() => {history.push(`/collections/${c.id}`)}}>View</button>
                                                </div>
                                            </div>
                                        </div>
                                }
                            </>
                        })
                    }
                </div>
            </div>
        </>
    )
}