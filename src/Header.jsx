import React from "react"
import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <>
            <nav>
                <ul className="header">
                    <li>
                        <NavLink
                            to="/"
                            activeclassname="selected-link"
                            className="header-menu"
                        >
                            <h1>Meny</h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/om"
                            activeclassname="selected-link"
                            className="header-about"
                        >
                            <h1>Om oss</h1>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
