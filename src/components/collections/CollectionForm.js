import React, { useEffect, useState } from "react"
import { createCollection, getCollections } from "./CollectionManager"
import { useHistory } from "react-router-dom"
import { getCurrentUser } from "../users/UserManager"


export const CollectionForm = () => {
    const [currentUser, setCurrentUser] = useState({})
    const date = new Date()
    const history = useHistory()
    const [collection, setCollection] = useState({
        name: "",
        date: "",
        user: 0
    })

    // get the current user object
    useEffect(() => {
        getCurrentUser().then(setCurrentUser)
    }, [])

    // the collection object we will send to the api
    const submitNewCollection = (evt) => {
        evt.preventDefault()
        const date = new Date()
        const newCollection = {
            name: collection.name,
            date: date.toISOString().split('T')[0],
            user: parseInt(currentUser.id)
        }
        //this is being imported from the collections manager
        createCollection(newCollection).then(() => { history.push('/collections') })
    }

    return <>
        <div className="container mt-4">
            <div className="card text-center bg-light">
                <h1 className="mt-4">New Collection Form</h1>
                <div className="input-group mb-3 px-4 pt-4">
                    <label className="input-group-text">Name:</label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={
                            (evt) => {
                                const copy = { ...collection }
                                copy.name = evt.target.value
                                setCollection(copy)
                            }
                        }>
                    </input>
                </div>
                <div>
                    <button className="btn btn-lg btn-primary m-4" onClick={submitNewCollection}>Submit</button>
                </div>
            </div>
        </div>
    </>
}