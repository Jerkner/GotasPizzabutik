import React from "react"
import { data } from "../data.js"
import { smoothScroll } from "../utils.js"

export default function Lyxpizzor({ active, setActiveCategory }) {
    const category = "lyxpizzor"
    const lyxpizzor = data.filter((item) => item.kategori === category)

    return (
        <ol
            id={category}
            className={`menu-container`}
        >
            <div>
                <h1
                    onClick={(e) => {
                        smoothScroll(e, category)
                        setActiveCategory(category)
                    }}
                    className={`menu-name has-info ${active ? "active" : ""}`}
                >
                    Lyxpizzor
                </h1>
                <h2 className="menu-info">
                    Pizza con mozzarella <br />
                    Italienska lyxpizzor med
                    <br />
                    husets tomatsås & mozzarella
                </h2>
            </div>
            {lyxpizzor.map((item, index) => (
                <li
                    key={index}
                    className="menu-content"
                >
                    <h3 className="number">{index + 27}.</h3>
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
