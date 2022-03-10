import React from "react"
import { Link, useHistory } from "react-router-dom"
// import "./NavBar.css"

export const NavBar = (props) => {
    const history = useHistory()
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/collections">My Collections</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/sets">Sets</Link>
            </li>
            {
                (localStorage.getItem("lu_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("lu_token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
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