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
                            to="/bestall"
                            activeclassname="selected-link"
                            className="header-about"
                        >
                            <h1>Beställ</h1>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
