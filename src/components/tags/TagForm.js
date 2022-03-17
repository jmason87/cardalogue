import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { createTag } from "./TagManager"


export const TagForm = () => {
    const [ newTag, setTag ] = useState("")
    
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
        <h1>Tag Form</h1>
        <form>
            <div>
                <label>Tag Label: </label>
                <input 
                    type="text"
                    onChange={(e) => {
                        let copy = { ...newTag }
                        copy = e.target.value
                        setTag(copy)
                    }} />
            </div>
        </form>
        <button onClick={createNewTag}>Create Tag</button>
        <button onClick={() => {history.push('/tags')}}>Cancel</button>

        </>
    )
}