import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

let get = element => document.getElementById(element)

const root = get("root")

ReactDOM.render(<App />, root)