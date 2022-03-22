import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getSingleSet, updateSet } from "./SetManager"


export const SetEdit = () => {

    const [singleSet, setSingleSet] = useState({
        name: "",
        manufacturer: "",
        year: ""
    })

    const { setId } = useParams()
    const parsedId = setId
    const history = useHistory()

    // this is fetching the current set and setting the values of the keys in the above
    // state variable to values of the current set
    useEffect(() => {
        getSingleSet(parsedId).then((newSet) => {
            setSingleSet({
                name: newSet.name,
                manufacturer: newSet.manufacturer,
                year: newSet.year
            })
        })
    }, [])

    const saveEditedSet = (e) => {
        e.preventDefault()
        const editedSet = {
            name: singleSet.name,
            manufacturer: singleSet.manufacturer,
            year: singleSet.year
        }
        updateSet(editedSet, parsedId)
            .then(() => { history.push("/sets") })
    }

    return (
        <>
            <div className="container text-center mt-4">
                <h1>Set Edit Form</h1>
                <div className="card text-center bg-light">
                    <div className="input-group mb-3 px-4 mt-4">
                        <label className="input-group-text">Name: </label>
                        <input
                            className="form-control"
                            type="text"
                            value={singleSet.name}
                            onChange={(evt) => {
                                const copy = { ...singleSet }
                                copy.name = evt.target.value
                                setSingleSet(copy)
                            }} />
                    </div>
                    <div className="input-group mb-3 px-4">
                        <label className="input-group-text">Manufacturer: </label>
                        <input
                            className="form-control"
                            type="text"
                            value={singleSet.manufacturer}
                            onChange={(evt) => {
                                const copy = { ...singleSet }
                                copy.manufacturer = evt.target.value
                                setSingleSet(copy)
                            }} />
                    </div>
                    <div className="input-group mb-3 px-4">
                        <label className="input-group-text">Year: </label>
                        <input
                            className="form-control"
                            type="text"
                            defaultValue={singleSet.year}
                            onChange={(evt) => {
                                const copy = { ...singleSet }
                                copy.year = evt.target.value
                                setSingleSet(copy)
                            }} />
                    </div>
                    <div>
                        <button className="btn btn-lg btn-primary m-4" onClick={saveEditedSet}>Save Set</button>
                        <button className="btn btn-lg btn-danger m-4" onClick={() => { history.push("/sets") }}>Cancel</button>
                    </div>
                </div>
            </div>

        </>
    )
}