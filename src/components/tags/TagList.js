import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { getTags, deleteTag } from "./TagManager"


export const TagList = () => {
    const [tags, setTags] = useState([])

    const history = useHistory()

    useEffect(() => {
        getTags().then(setTags)
    }, [])

    return (
        <>
            <h1>Tag List</h1>
            <button onClick={() => {history.push("/tagform")}}>Add a Tag</button>
            {
                tags.map((tag) => {
                    return <>
                        <ul>
                            <li>
                                {tag.label} 
                                <button onClick={() => {history.push(`/tagedit/${tag.id}`)}}>Edit</button>
                                <button onClick={() => {deleteTag(tag.id).then(setTags)}}>Delete</button>
                            </li>
                        </ul>
                    </>
                })
            }
        </>
    )
}