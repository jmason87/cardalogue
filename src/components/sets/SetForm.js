import React, { useEffect, useState } from "react"
import { useHistory, Link, useParams } from "react-router-dom"
import { createSet } from "./SetManager"



export const SetForm = () => {
    const [newSet, setNewSet] = useState({
        name: "",
        manufacturer: "",
        year: ""
    })
    const history = useHistory()

    const createNewSet = (e) => {
        e.preventDefault()
        const setForSubmit = {
            name: newSet.name,
            manufacturer: newSet.manufacturer,
            year: newSet.year
        }
        createSet(setForSubmit).then(history.push("/sets"))
    }

    return (
        <>
            <h1>Set Form</h1>
            <form>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        onChange={(evt) => {
                            const copy = { ...newSet }
                            copy.name = evt.target.value
                            setNewSet(copy)
                        }} />
                </div>
                <div>
                    <label>Manufacturer: </label>
                    <input
                        type="text"
                        onChange={(evt) => {
                            const copy = { ...newSet }
                            copy.manufacturer = evt.target.value
                            setNewSet(copy)
                        }} />
                </div>
                <div>
                    <label>Year: </label>
                    <input
                        type="text"
                        onChange={(evt) => {
                            const copy = { ...newSet }
                            copy.year = evt.target.value
                            setNewSet(copy)
                        }} />
                </div>
                <div>
                    <button onClick={createNewSet}>Save Set</button>
                </div>
            </form>
        </>
    )
}