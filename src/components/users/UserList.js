import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { getUsers } from "./UserManager"

export const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(setUsers)
    }, [])

    return (
        <>
            <h1>User List</h1>
            {
                users.map((user) => {
                    return <>
                        <ul>
                            <li><Link to={`/user/${user.id}`}>{user.username}</Link></li>
                        </ul>
                    </>
                })
            }
        </>
    )
}