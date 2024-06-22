import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
    return (
        <header>
            <nav>
                <h1 className="nav-title"><FontAwesomeIcon icon={faEarthAsia} style={{ color: "#ffffff", }} /> my travel journal.</h1>
            </nav>
        </header>
    )
}