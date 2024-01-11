import React from "react"

export default function Footer() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <footer>
            <button
                onClick={scrollToTop}
                className="scroll-to-top-button"
            >
                Till sidans topp
            </button>
        </footer>
    )
}
