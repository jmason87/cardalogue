import React, { useEffect, useState } from "react"
import { useHistory, Link, useParams } from "react-router-dom"
import { getCategories } from "../categories/CategoryManager"
import { getTags } from "../tags/TagManager"
import { createCard } from "./CardManager"



export const CardForm = () => {
    const [categories, setCategories] = useState([])
    const [tags, setTags] = useState([])
    const [string, setString] = useState("")

    const { setId } = useParams()
    const parsedId = parseInt(setId)
    const history = useHistory()

    const [newCard, setNewCard] = useState({
        firstName: "",
        lastName: "",
        cardNumber: 0,
        cardCategory: 0,
        // image: string,
        isApproved: false,
        set: parsedId,
        // tag: []
        tag: new Set()

    })

    useEffect(() => {
        getCategories().then(setCategories)
    }, [])

    useEffect(() => {
        getTags().then(setTags)
    }, [])

    const submitCardForApproval = (e) => {
        e.preventDefault()
        const cardForSubmit = {
            first_name: newCard.firstName,
            last_name: newCard.lastName,
            card_number: newCard.cardNumber,
            card_category: parseInt(newCard.cardCategory),
            image: string,
            is_approved: newCard.isApproved,
            set: newCard.set,
            tag: Array.from(newCard.tag)
        }
        createCard(cardForSubmit).then(() => { history.push("/sets") })
    }

    const getBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
    }

    const createGameImageString = (event) => {
        getBase64(event.target.files[0], (base64ImageString) => {
            console.log("Base64 of file is", base64ImageString);

            // Update a component state variable to the value of base64ImageString
            setString(base64ImageString)
        });
    }
    return <>
        <div className="container mt-4 text-center">
            <h1>Add Card Form</h1>
            <div className="card text-center bg-light">
                <div className="input-group mb-3 px-4 mt-4">
                    <label className="input-group-text">First Name: </label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={(evt) => {
                            const copy = { ...newCard }
                            copy.firstName = evt.target.value
                            setNewCard(copy)
                        }}
                    />
                </div>
                <div className="input-group mb-3 px-4">
                    <label className="input-group-text">Last Name: </label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={(evt) => {
                            const copy = { ...newCard }
                            copy.lastName = evt.target.value
                            setNewCard(copy)
                        }}
                    />
                </div>
                <div className="input-group mb-3 px-4">
                    <label className="input-group-text">Card Number: </label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={(evt) => {
                            const copy = { ...newCard }
                            copy.cardNumber = evt.target.value
                            setNewCard(copy)
                        }}
                    />
                </div>
                <div className="input-group mb-3 px-4">
                    <label className="input-group-text">Card Number: </label>
                    <select className=""
                        onChange={(evt) => {
                            const copy = { ...newCard }
                            copy.cardCategory = evt.target.value
                            setNewCard(copy)
                    }}>
                        <option>Category</option>
                        {
                            categories.map((category) => {
                                return <option value={category.id}>{category.label}</option>
                            })
                        }
                    </select>
                </div>
                <div className="input-group mb-3 px-4">
                    {
                        tags.map((tag) => {
                            return <p>
                                <input
                                    type='checkbox'
                                    name='tag'
                                    value={tag.id}
                                    onChange={(evt) => {
                                        const copy = { ...newCard }
                                        copy.tag.has(parseInt(evt.target.value))
                                            ? copy.tag.delete(parseInt(evt.target.value))
                                            : copy.tag.add(parseInt(evt.target.value))
                                        setNewCard(copy)
                                    }} />{tag.label} 
                            </p>
                        })
                    }
                </div>
                <div className="input-group mb-3 px-4">
                    <input type="file" id="card_image" onChange={createGameImageString} />
                    {/* <input type="hidden" name="card_id" value={card.id} /> */}
                    {/* <button onClick={() => {
                    // Upload the stringified image that is stored in state
                }}>Upload</button> */}
                </div>
                <div>
                    <button className="btn btn-lg btn-primary m-4" onClick={submitCardForApproval}>Submit Card</button>
                    <button className="btn btn-lg btn-danger m-4" onClick={() => { history.push(`/sets/${setId}`) }}>Back</button>
                </div>
            </div>
        </div>
    </>
}