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
            <div class="container">
                <div class="col-md-12 text-center">
                    <button type="button" className="btn btn-lg btn-primary mt-4" onClick={() => { history.push("./collectionform") }}>Add New Collection</button>
                </div>
            </div>
            <div className="container">
                <div className="row row-cols-3 mt-4">
                    {
                        collections.map((c) => {
                            return <>
                                {
                                    currentUser.id === c.user.id
                                        ? <div className="col mt-4">
                                            <div className="card text-center bg-light">
                                                <div className="card-body">
                                                    <h1 className="card-title" key={`c--${c.id}`}>{c.name}</h1>
                                                    <button className="btn btn-sm btn-primary m-4" onClick={() => { history.push(`/collections/${c.id}`) }}>View</button>
                                                    <button className="btn btn-sm btn-danger m-4" onClick={() => { deleteCollection(c.id).then(setCollections) }}>Delete</button>
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