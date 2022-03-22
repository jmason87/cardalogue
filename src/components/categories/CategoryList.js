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
            <div className="container text-center mt-4">
                <h1>Category List</h1>
                <button className="btn btn-md btn-primary" onClick={() => { history.push("/categoryform") }}>Add a Category</button>
            </div>
            <div className="container text-center mt-4">
                <div className="card bg-light m-4 p-4">
                    {
                        categories.map((cat) => {
                            return <>
                                <div>
                                    <div>
                                        {cat.label}
                                        <button className="btn btn-sm btn-warning m-1" onClick={() => { history.push(`/catedit/${cat.id}`) }}>Edit</button>
                                        <button className="btn btn-sm btn-danger m-1" onClick={() => { deleteCategory(cat.id).then(setCategories) }}>Delete</button>
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