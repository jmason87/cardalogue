import React, { useEffect, useState } from "react"
import { getSets } from "./SetManager"
import { useHistory, Link } from "react-router-dom"
import { getCurrentUser } from "../users/UserManager"


export const SetList = () => {
    const [sets, setSets] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    const history = useHistory()

    useEffect(() => {
        getSets().then(setSets)
    }, [])

    useEffect(() => {
        getCurrentUser().then(setCurrentUser)
    }, [])

    return (
        <>
            <h1>Sets</h1>
            { //checking to see if the current user is an admin, if so, they will see the button
            currentUser.is_staff 
                ? <button onClick={() => {history.push("/setform")}}>Add New Set</button>
                : ""
            }
            { // mapping over the sets array for individual set info
                sets.map((set) => {
                    return <> 
                    <Link to={`/sets/${set.id}`}><p>{set.name}</p></Link>
                    {
                        currentUser.is_staff
                            ? <button className="btn-warning" onClick={() => {history.push(`/setedit/${set.id}`)}}>Edit</button>
                            : ""
                    }
                    </>
                })
            }
        </>
    )
}