import React from "react"
import Logo from "./Logo"

export default function Welcome() {
    return (
        <div className="welcome">
            <h1>
                Välkommen till
                <br />
                Götas Pizzabutik!
            </h1>
            <Logo />
        </div>
    )
}
