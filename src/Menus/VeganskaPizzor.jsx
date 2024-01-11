import React from "react"
import { data } from "../data.js"
import { smoothScroll } from "../utils.js"

export default function VeganskaPizzor({ active, setActiveCategory }) {
    const category = "veganskaPizzor"
    const veganskaPizzor = data.filter((item) => item.kategori === category)

    return (
        <ol
            id={category}
            className={`menu-container`}
        >
            <h1
                onClick={(e) => {
                    smoothScroll(e, category)
                    setActiveCategory(category)
                }}
                className={`menu-name vegan ${active ? "active" : ""}`}
            >
                Veganska Pizzor
            </h1>
            {veganskaPizzor.map((item, index) => (
                <li
                    key={index}
                    className="menu-content"
                >
                    <h3 className="number">{index + 1}.</h3>
                    <div className="name-and-ingredients">
                        <h3 className="name">{item.namn}</h3>
                        <ol>
                            {item.ingredienser.map((ingrediens, j) => (
                                <li
                                    key={j}
                                    className="ingredient"
                                >
                                    {ingrediens.charAt(0).toUpperCase() +
                                        ingrediens.slice(1)}
                                    {j !== item.ingredienser.length - 1
                                        ? ","
                                        : ""}
                                </li>
                            ))}
                        </ol>
                    </div>
                    <p className="price">{item.pris}</p>
                </li>
            ))}
        </ol>
    )
}
