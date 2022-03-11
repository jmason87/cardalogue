import React, { useEffect, useState } from "react"
import { getSets } from "./SetManager"
import { useHistory, Link } from "react-router-dom"


export const SetList = () => {
    const [sets, setSets] = useState([])

    useEffect(() => {
        getSets().then(setSets)
    }, [])

    return (
        <>
            <h1>Sets</h1>
            { // mapping over the sets array for individual set info
                sets.map((set) => {
                    return <> 
                    <Link to={`/sets/${set.id}`}><p>{set.name}</p></Link>
                    </>
                })
            }
        </>
    )
}