import React from "react"
import { render } from "react-dom"

import Header from "./sections/header.js"
import AboutMe from "./sections/about.js"

import headerData from "../content/header.yaml"
import socialLinks from "../content/links.yaml"
import aboutMeContent from "../content/about_me.md"
import aboutMeSidebar from "../content/about_me_sidebar.yaml"

require("./styles/index.styl")

function ErinnBarry (props) {
  return (
    <div style={{ minHeight: "100%", height: "100%" }}>
      <Header {...Object.assign({}, headerData, socialLinks)} />
      <AboutMe html={aboutMeContent} sidebar={aboutMeSidebar} />
    </div>
  )
}

render(
  <ErinnBarry />,
  document.getElementById("app")
)
