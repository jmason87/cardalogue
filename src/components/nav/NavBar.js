import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { getCurrentUser } from "../users/UserManager"
// import "./navbar.css"

export const NavBar = (props) => {
    const history = useHistory()
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        getCurrentUser().then(setCurrentUser)
    }, [])

    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <div className="navbar-nav">
                        {/* Links for all users */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/collections">My Collections</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/allcollections">All Collections</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sets">Sets</Link>
                        </li>
                        {/* links for only admins */}
                        {
                            currentUser.is_staff
                                ? <li className="nav-item"><Link className="nav-link" to="/approval">Cards For Approval</Link></li>
                                : ""
                        }
                        {
                            currentUser.is_staff
                                ? <li className="nav-item"><Link className="nav-link" to="/tags">Tag Management</Link></li>
                                : ""
                        }
                        {
                            currentUser.is_staff
                                ? <li className="nav-item"><Link className="nav-link" to="/categories">Category Management</Link></li>
                                : ""
                        }
                        {
                            currentUser.is_staff
                                ? <li className="nav-item"><Link className="nav-link" to="/users">User Management</Link></li>
                                : ""
                        }
                        {/* logout link */}
                    </div>
                </ul>
            </div>
            <div className="navbar-nav ms-auto">
                <div className="container w-4">

                    {
                        localStorage.getItem("lu_token") !== null
                            ? <button className="btn btn-outline-dark "
                                onClick={() => {
                                    localStorage.removeItem("lu_token")
                                    history.push({ pathname: "/" })
                                }}>
                                Logout {currentUser.username}
                            </button>
                            : ""
                    }
                </div>
            </div>
        </nav >
    )
}