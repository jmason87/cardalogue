import { useEffect, useState } from "react"
import { getCollections } from "./CollectionManager"

export const CollectionList = () => {
    const [collections, setCollections] = useState([])

    useEffect(() => {
        getCollections().then(setCollections)
    }, [])

    return (
        <>
            {
                collections.map((c) => {
                    return <h1>{c.name}</h1>
                })
            }
        </>
    )
}