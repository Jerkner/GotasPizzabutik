import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

export default function Phone() {
    return (
        <div className="phone-container">
            <h3>
                Beställ här:
                <br />
                <a href="tel:+46317135382">
                    <FontAwesomeIcon icon={faPhone} />
                    031-713 53 82
                </a>
            </h3>
        </div>
    )
}
