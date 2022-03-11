import React, { useEffect, useState } from "react"
import { getCollections, deleteCollection } from "./CollectionManager"
import { useHistory, Link } from "react-router-dom"


export const CollectionList = () => {
    const [collections, setCollections] = useState([])
    const history = useHistory()

    useEffect(() => {
        getCollections().then(setCollections)
    }, [])

    return (
        <>
            <button onClick={() => {history.push("./collectionform")}}>Add New Collection</button>
            {
                collections.map((c) => {
                    return <>
                        <h1 key={`c--${c.id}`}>{c.name}</h1>
                        <div>
                            <Link to={`/collections/${c.id}`}>View</Link>
                            <button onClick={() => {deleteCollection(c.id).then(setCollections)}}>Delete</button>
                        </div>
                    </>
                })
            }
        </>
    )
}