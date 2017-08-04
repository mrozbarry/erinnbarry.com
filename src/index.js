import React from "react"
import { render } from "react-dom"

import Header from "./sections/header.js"

import headerData from "../content/header.yaml"

require("./styles/index.styl")

function ErinnBarry (props) {
  return (
    <div style={{ minHeight: "100%", height: "100%" }}>
      <Header {...headerData} />
    </div>
  )
}

render(
  <ErinnBarry />,
  document.getElementById("app")
)
