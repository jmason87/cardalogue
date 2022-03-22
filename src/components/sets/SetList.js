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
            <div className="container  text-center mt-4">

                <h1>Sets</h1>
                { //checking to see if the current user is an admin, if so, they will see the button
                    currentUser.is_staff
                        ? <button className="btn btn-lg btn-primary mt-4" onClick={() => { history.push("/setform") }}>Add New Set</button>
                        : ""
                }
            </div>
            <div className="container">
                <div className="row">
                    { // mapping over the sets array for individual set info
                        sets.map((set) => {
                            return <>
                                <div className="col">
                                    <div className="card text-center bg-light mt-4">
                                        <Link className="mt-4"to={`/sets/${set.id}`}><p>{set.name}</p></Link>
                                        {
                                            currentUser.is_staff
                                                ? <button className="btn-warning m-4" onClick={() => { history.push(`/setedit/${set.id}`) }}>Edit</button>
                                                : ""
                                        }

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