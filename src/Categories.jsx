import React from "react"
import { smoothScroll } from "./utils"

export default function Categories({ setActiveCategory }) {
    return (
        <nav className="categories">
            <ol>
                <li>
                    <a
                        className="category-link"
                        onClick={(e) => {
                            smoothScroll(e, "pizzor")
                            setActiveCategory("pizzor")
                        }}
                    >
                        Pizzor
                    </a>
                </li>
                <li>
                    <a
                        className="category-link"
                        onClick={(e) => {
                            smoothScroll(e, "salladOchKebaber")
                            setActiveCategory("salladOchKebaber")
                        }}
                    >
                        Sallad & Kebaber
                    </a>
                </li>
                <li>
                    <a
                        className="category-link"
                        onClick={(e) => {
                            smoothScroll(e, "lyxpizzor")
                            setActiveCategory("lyxpizzor")
                        }}
                    >
                        Lyxpizzor
                    </a>
                </li>
                <li>
                    <a
                        className="category-link vegan"
                        onClick={(e) => {
                            smoothScroll(e, "veganskaPizzor")
                            setActiveCategory("veganskaPizzor")
                        }}
                    >
                        Veganska Pizzor
                    </a>
                </li>
                <li>
                    <a
                        className="category-link"
                        onClick={(e) => {
                            smoothScroll(e, "nyheter")
                            setActiveCategory("nyheter")
                        }}
                    >
                        Nyheter
                    </a>
                </li>
            </ol>
        </nav>
    )
}
