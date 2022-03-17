import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { deleteCategory, getCategories } from "./CategoryManager"


export const CategoryList = () => {
    const [categories, setCategories] = useState([])

    const history = useHistory()

    useEffect(() => {
        getCategories().then(setCategories)
    }, [])

    return (
        <>
            <h1>Category List</h1>
            <button onClick={() => {history.push("/categoryform")}}>Add a Category</button>
            {
                categories.map((cat) => {
                    return <>
                        <ul>
                            <li>
                                {cat.label} 
                                <button onClick={() => {history.push(`/catedit/${cat.id}`)}}>Edit</button>
                                <button onClick={() => {deleteCategory(cat.id).then(setCategories)}}>Delete</button>
                            </li>
                        </ul>
                    </>
                })
            }
        </>
    )
}