import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { createCategory } from "./CategoryManager"


export const CategoryForm = () => {
    const [ newCategory, setCategory ] = useState("")
    
    const history = useHistory()

    const createNewCategory = (e) => {
        e.preventDefault()
        const cat = {
            label: newCategory
        }
        createCategory(cat).then(history.push("/categories"))
    }

    return (
        <>
        <h1>Category Form</h1>
        <form>
            <div>
                <label>Category Label: </label>
                <input 
                    type="text"
                    onChange={(e) => {
                        let copy = { ...newCategory }
                        copy = e.target.value
                        setCategory(copy)
                    }} />
            </div>
        </form>
        <button onClick={createNewCategory}>Create Tag</button>
        <button onClick={() => {history.push('/categories')}}>Cancel</button>

        </>
    )
}