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
            <div className="container text-center mt-4">
                <h1>Tag List</h1>
                <button className="btn btn-md btn-primary" onClick={() => { history.push("/tagform") }}>Add a Tag</button>
            </div>
            <div className="container text-center mt-4">

                <div className="card bg-light m-4 p-4">
                {
                    tags.map((tag) => {
                        return <>
                                <div>
                                    <div key={`${tag.id}`}>
                                        {tag.label}
                                        <button className="btn btn-sm btn-warning m-1" key="1" onClick={() => { history.push(`/tagedit/${tag.id}`) }}>Edit</button>
                                        <button className="btn btn-sm btn-danger m-1" key="2" onClick={() => { deleteTag(tag.id).then(setTags) }}>Delete</button>
                                    </div>
                                </div>
                        </>
                    })
                }
                </div>
            </div>
        </>
    )
}