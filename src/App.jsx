import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./About"
import Header from "./Header"
import Menu from "./Menu"

export default function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route
                        path="/*"
                        element={<Menu />}
                    />
                    <Route
                        path="/om"
                        element={<About />}
                    />

                    <Route
                        path="*"
                        element={<Menu />}
                    />
                </Routes>
            </Router>
        </>
    )
}
