import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { getCurrentUser } from "../users/UserManager"
// import "./NavBar.css"

export const NavBar = (props) => {
    const history = useHistory()
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        getCurrentUser().then(setCurrentUser)
    }, [])

    return (
        <ul className="navbar">
            {/* Links for all users */}
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/collections">My Collections</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/sets">Sets</Link>
            </li>
            {/* links for only admins */}
            {
                currentUser.is_staff
                    ? <li><Link to="/approval">Cards For Approval</Link></li>
                    : ""
            }
            {
                currentUser.is_staff
                    ? <li><Link to="/tags">Tag Management</Link></li>
                    : ""
            }
                        {
                currentUser.is_staff
                    ? <li><Link to="/users">User Management</Link></li>
                    : ""
            }
            {/* logout link */}
            {
                (localStorage.getItem("lu_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("lu_token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout {currentUser.username}</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }
        </ul>
    )
}