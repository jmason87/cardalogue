import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { createTag, getTag, updateTag } from "./TagManager"


export const TagEdit = () => {
    const [tag, setTag] = useState({})

    const history = useHistory()
    const { tagId } = useParams()
    const parsedId = tagId

    useEffect(() => {
        getTag(parsedId).then(setTag)
    }, [])

    const updateNewTag = (e) => {
        e.preventDefault()
        const editedtag = {
            label: tag.label
        }
        updateTag(editedtag, parsedId).then(history.push("/tags"))
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
                        defaultValue={tag.label}
                        onChange={(e) => {
                            const copy = { ...tag }
                            copy.label = e.target.value
                            setTag(copy)
                        }} />
                </div>
                <button className="btn btn-md btn-primary m-4" onClick={updateNewTag}>Save Tag</button>
            </div>
        </>
    )
}