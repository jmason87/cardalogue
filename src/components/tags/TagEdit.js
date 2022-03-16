import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { createTag, getTag, updateTag } from "./TagManager"


export const TagEdit = () => {
    const [ tag, setTag ] = useState({})
    
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
        <h1>Tag Form</h1>
        <form>
            <div>
                <label>Tag Label: </label>
                <input 
                    type="text"
                    defaultValue={tag.label}
                    onChange={(e) => {
                        const copy = { ...tag }
                        copy.label = e.target.value
                        setTag(copy)
                    }} />
            </div>
        </form>
        <button onClick={updateNewTag}>Save Tag</button>
        </>
    )
}