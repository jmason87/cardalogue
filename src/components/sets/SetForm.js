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
            <div className="container text-center mt-4">
                <h1>Set Form</h1>
                <div className="card text-center bg-light">
                    <div className="input-group mb-3 px-4 mt-4">
                        <label className="input-group-text">Name: </label>
                        <input
                            className="form-control"
                            type="text"
                            onChange={(evt) => {
                                const copy = { ...newSet }
                                copy.name = evt.target.value
                                setNewSet(copy)
                            }} />
                    </div>
                    <div className="input-group mb-3 px-4">
                        <label className="input-group-text">Manufacturer: </label>
                        <input
                            className="form-control"
                            type="text"
                            onChange={(evt) => {
                                const copy = { ...newSet }
                                copy.manufacturer = evt.target.value
                                setNewSet(copy)
                            }} />
                    </div>
                    <div className="input-group mb-3 px-4">
                        <label className="input-group-text">Year: </label>
                        <input
                            className="form-control"
                            type="text"
                            onChange={(evt) => {
                                const copy = { ...newSet }
                                copy.year = evt.target.value
                                setNewSet(copy)
                            }} />
                    </div>
                    <div>
                        <button className="btn btn-lg btn-primary m-4" onClick={createNewSet}>Save Set</button>
                        <button className="btn btn-lg btn-danger m-4" onClick={() => { history.push('/sets') }}>Cancel</button>
                    </div>
                </div>
            </div>

        </>
    )
}