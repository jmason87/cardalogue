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

            <div className="container text-center mt-4">
                <h2>{user.username}</h2>
                <div className="card bg-light w-50 mx-auto">
                    <div>Name: {user.first_name} {user.last_name}</div>
                    <div>Email: {user.email}</div>
                    <div>Joined on: {user.date_joined}</div>
                    <div>Privileges:
                        {
                            user.is_staff
                                ? " Admin"
                                : " Collector"
                        }
                    </div>
                </div>
                {   // if the current user is an admin they will see the buttons to promote or demote, regular
                    // users will see no button
                    currentUser.id === user.id 
                        ? ""
                        : currentUser.is_staff
                            ? user.is_staff
                                ? <button className="btn btn-md btn-danger m-4" onClick={() => { makeCollector(user.id).then(setUser) }}>Make Collector</button>
                                : <button className="btn btn-md btn-success m-4" onClick={() => { makeAdmin(user.id).then(setUser) }}>Make an Admin</button>
                            : ""

                }
            </div>
        </>
    )
}