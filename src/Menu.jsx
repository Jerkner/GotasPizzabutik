import React, { useEffect, useState, useRef } from "react"
import Masonry from "masonry-layout"
import Footer from "./Footer.jsx"
import Categories from "./Categories.jsx"
import Pizzor from "./Menus/Pizzor.jsx"
import Lyxpizzor from "./Menus/Lyxpizzor.jsx"
import Nyheter from "./Menus/Nyheter.jsx"
import VeganskaPizzor from "./Menus/VeganskaPizzor.jsx"
import SalladOchKebaber from "./Menus/SalladOchKebaber.jsx"

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState(null)
    const menusRef = useRef(null)

    useEffect(() => {
        const masonry = new Masonry(menusRef.current, {
            itemSelector: ".menu-container",
            gutter: 20,
            fitWidth: true,
        })

        masonry.layout()
    }, [])

    return (
        <main>
            <Categories
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            <div
                className="menus"
                ref={menusRef}
            >
                <Pizzor
                    active={activeCategory === "pizzor"}
                    setActiveCategory={setActiveCategory}
                />
                <SalladOchKebaber
                    active={activeCategory === "salladOchKebaber"}
                    setActiveCategory={setActiveCategory}
                />
                <Lyxpizzor
                    active={activeCategory === "lyxpizzor"}
                    setActiveCategory={setActiveCategory}
                />
                <VeganskaPizzor
                    active={activeCategory === "veganskaPizzor"}
                    setActiveCategory={setActiveCategory}
                />
                <Nyheter
                    active={activeCategory === "nyheter"}
                    setActiveCategory={setActiveCategory}
                />
            </div>
            <Footer />
        </main>
    )
}
