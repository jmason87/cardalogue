import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { getCategory, updateCategory } from "./CategoryManager"


export const CategoryEdit = () => {
    const [ category, setCategory ] = useState({})
    
    const history = useHistory()
    const { catId } = useParams()
    const parsedId = catId

    useEffect(() => {
        getCategory(parsedId).then(setCategory)
    }, [])

    const updateNewCategory = (e) => {
        e.preventDefault()
        const editedcat = {
            label: category.label
        }
        updateCategory(editedcat, parsedId).then(history.push("/categories"))
    }

    return (
        <>
        <h1>Category Form</h1>
        <form>
            <div>
                <label>Category Label: </label>
                <input 
                    type="text"
                    defaultValue={category.label}
                    onChange={(e) => {
                        const copy = { ...category }
                        copy.label = e.target.value
                        setCategory(copy)
                    }} />
            </div>
        </form>
        <button onClick={updateNewCategory}>Save Category</button>
        </>
    )
}