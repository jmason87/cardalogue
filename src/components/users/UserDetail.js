import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { getUser, getUsers } from "./UserManager"

export const UserDetail = () => {
    const [user, setUser] = useState({})

    const { userId } = useParams()
    const parsedId = userId
    
    useEffect(() => {
        getUser(parsedId).then(setUser)
    }, [])

    return (
        <>
            <h1>User Detail</h1>
            <h2>{user.username}</h2>
            <ul>
                <li>Name: {user.first_name} {user.last_name}</li>
                <li>Email: {user.email}</li>
                <li>Joined on: {user.date_joined}</li>
                <li>Status: 
                    {
                        user.is_staff
                            ? " Admin"
                            : " Collector"
                    }
                </li>
            </ul>
        </>
    )
}