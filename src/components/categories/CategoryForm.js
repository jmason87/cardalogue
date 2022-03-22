import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { createCategory } from "./CategoryManager"


export const CategoryForm = () => {
    const [newCategory, setCategory] = useState("")

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
            <div className="container text-center mt-4">
                <h1>Category Form</h1>
                    <div className="input-group mb-3 px-4 pt-4">
                        <label className="input-group-text">Category Label: </label>
                        <input
                            className="form-control"
                            type="text"
                            onChange={(e) => {
                                let copy = { ...newCategory }
                                copy = e.target.value
                                setCategory(copy)
                            }} />
                    </div>
                <button className="btn btn-md btn-primary m-4" onClick={createNewCategory}>Create Tag</button>
                <button className="btn btn-md btn-danger m-4" onClick={() => { history.push('/categories') }}>Cancel</button>
            </div>
        </>
    )
}