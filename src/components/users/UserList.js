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
            <div className="container text-center mt-4">
                <h1>User List</h1>
                {
                    users.map((user) => {
                        return <>
                            <div>
                                <div><Link to={`/user/${user.id}`}>{user.username}</Link></div>
                            </div>
                        </>
                    })
                }
            </div>
        </>
    )
}