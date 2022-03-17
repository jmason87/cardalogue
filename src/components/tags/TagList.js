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
                            <li key={`${tag.id}`}>
                                {tag.label} 
                                <button key="1" onClick={() => {history.push(`/tagedit/${tag.id}`)}}>Edit</button>
                                <button key="2" onClick={() => {deleteTag(tag.id).then(setTags)}}>Delete</button>
                            </li>
                        </ul>
                    </>
                })
            }
        </>
    )
}