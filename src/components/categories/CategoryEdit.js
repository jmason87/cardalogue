import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { getCategory, updateCategory } from "./CategoryManager"


export const CategoryEdit = () => {
    const [category, setCategory] = useState({})

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
            <div className="container text-center mt-4">
                <h1>Category Form</h1>
                <div className="input-group mx-auto w-50 mb-3 px-4 pt-4">
                    <label className="input-group-text">Category Label: </label>
                    <input
                        className="form-control"
                        type="text"
                        defaultValue={category.label}
                        onChange={(e) => {
                            const copy = { ...category }
                            copy.label = e.target.value
                            setCategory(copy)
                        }} />
                </div>
                <button className="btn btn-md btn-primary m-4" onClick={updateNewCategory}>Save Category</button>
            </div>
        </>
    )
}