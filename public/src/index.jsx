import React from "react"
import ReactDOM from "react-dom/client"

import Header from "./sections/header.jsx"
import AboutMe from "./sections/about.jsx"
import WritingSamples from "./sections/writing_samples.jsx"

import headerData from "../../content/header.js"
import * as socialLinks from "../../content/links.yaml"
import aboutMeContent from "../../content/about_me.html?raw"
import aboutMeSidebar from "../../content/about_me_sidebar.js"
import writingSamples from "../../content/writing_samples.js"

import './styles/index.styl';

const ErinnBarry = () => (
  <div style={{ minHeight: "100%", height: "100%" }}>
    <Header {...Object.assign({}, headerData, socialLinks)} />
    <AboutMe html={aboutMeContent} sidebar={aboutMeSidebar} />
    <WritingSamples samples={writingSamples} />
  </div>
);

ReactDOM.createRoot(document.querySelector('#app'))
  .render(<React.StrictMode><ErinnBarry /></React.StrictMode>);
