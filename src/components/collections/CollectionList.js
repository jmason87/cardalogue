import React, { useEffect, useState } from "react"
import { getCollections } from "./CollectionManager"
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
                            <Link to={'/collectiondetail'}>View</Link>
                            <button>Delete</button>
                        </div>
                    </>
                })
            }
        </>
    )
}