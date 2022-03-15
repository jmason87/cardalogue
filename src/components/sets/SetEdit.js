import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getSingleSet, updateSet } from "./SetManager"


export const SetEdit = () => {

    const [singleSet, setSingleSet] = useState({
        name: "",
        manufacturer: "",
        year: ""
    })
    // const [ name, setName ] = useState("")
    // const [ manufacturer, setManufacturer ] = useState("")
    // const [ year, setYear ] = useState("")


    const { setId } = useParams()
    const parsedId = setId
    const history = useHistory()

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
            <h1>Set Edit Form</h1>
            <form>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        value={singleSet.name}
                        onChange={(evt) => {
                            const copy = { ...singleSet }
                            copy.name = evt.target.value
                            setSingleSet(copy)
                        }} />
                </div>
                <div>
                    <label>Manufacturer: </label>
                    <input
                        type="text"
                        value={singleSet.manufacturer}
                        onChange={(evt) => {
                            const copy = { ...singleSet }
                            copy.manufacturer = evt.target.value
                            setSingleSet(copy)
                        }} />
                </div>
                <div>
                    <label>Year: </label>
                    <input
                        type="text"
                        defaultValue={singleSet.year}
                        onChange={(evt) => {
                            const copy = { ...singleSet }
                            copy.year = evt.target.value
                            setSingleSet(copy)
                        }} />
                </div>
                <div>
                    <button onClick={saveEditedSet}>Save Set</button>
                    <button onClick={() => { history.push("/sets") }}>Cancel</button>
                </div>
            </form>

        </>
    )
}