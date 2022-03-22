import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { createTag } from "./TagManager"


export const TagForm = () => {
    const [newTag, setTag] = useState("")

    const history = useHistory()

    const createNewTag = (e) => {
        e.preventDefault()
        const tag = {
            label: newTag
        }
        createTag(tag).then(history.push("/tags"))
    }

    return (
        <>
            <div className="container text-center mt-4">
                <h1>Tag Form</h1>
                <div className="input-group mb-3 px-4 pt-4">
                    <label className="input-group-text">Tag Label: </label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={(e) => {
                            let copy = { ...newTag }
                            copy = e.target.value
                            setTag(copy)
                        }} />
                </div>
                <button className="btn btn-md btn-primary m-4" onClick={createNewTag}>Create Tag</button>
                <button className="btn btn-md btn-danger m-4" onClick={() => { history.push('/tags') }}>Cancel</button>
            </div>
        </>
    )
}