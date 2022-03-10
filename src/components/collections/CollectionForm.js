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

    useEffect(() => {
        getCurrentUser().then(setCurrentUser)
    }, [])
    console.log(currentUser.id)
    const submitNewCollection = (evt) => {
        evt.preventDefault()
        const date = new Date()
        const newCollection = {
            name: collection.name,
            date: date.toISOString().split('T')[0],
            user: parseInt(currentUser.id)
        }
        createCollection(newCollection).then(() => {history.push('/collections')})
    }

    // const submitNewCollection = (evt) => {
    //     evt.preventDefault()
    //     createCollection(collection)
    //         .then(() => {
    //             history.push('/collections')
    //         })
    // }


    return <>
        <h1>New Collection Form</h1>
        <form>
            <section>
                <label>Name:</label>
                <input
                    type="text"
                    onChange={
                        (evt) => {
                            const copy = {...collection}
                            copy.name = evt.target.value
                            setCollection(copy)
                        }
                    }>
                </input>
                <div>
                    <button onClick={submitNewCollection}>Submit</button>
                </div>
            </section>
        </form>

    </>
}