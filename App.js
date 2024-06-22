import React from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import data from "./data.js"

export default function App() {
    const mainContent = data.map(item => {
        return (
            < Main
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <section class="section-main">
                {mainContent}
            </section>
        </div>
    )
}