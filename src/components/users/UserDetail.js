import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { getCurrentUser, getUser, getUsers, makeAdmin, makeCollector } from "./UserManager"

export const UserDetail = () => {
    const [user, setUser] = useState({})
    const [currentUser, setCurrentUser] = useState({})
    

    const { userId } = useParams()
    const parsedId = userId
    
    useEffect(() => {
        getUser(parsedId).then(setUser)
    }, [user.is_staff])

    useEffect(() => {
        getCurrentUser().then(setCurrentUser)
    }, [])



    return (
        <>
            <h1>User Detail</h1>
            <h2>{user.username}</h2>
            <ul>
                <li>Name: {user.first_name} {user.last_name}</li>
                <li>Email: {user.email}</li>
                <li>Joined on: {user.date_joined}</li>
                <li>Privileges: 
                    {
                        user.is_staff
                            ? " Admin"
                            : " Collector"
                    }
                </li>
            </ul>
            {   // if the current user is an admin they will see the buttons to promote or demote, regular
                // users will see no button
                currentUser.is_staff
                    ? user.is_staff
                        ? <button onClick={() => {makeCollector(user.id).then(setUser)}}>Make Collector</button>
                        : <button onClick={() => {makeAdmin(user.id).then(setUser)}}>Make an Admin</button>
                    : ""
            }
        </>
    )
}