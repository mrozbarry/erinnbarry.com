import React from "react"

function Header (props) {
  return (
    <header className="section-header">
      <div style={{ flexGrow: 1 }} />
      <div className="profile-image" style={{ backgroundImage: "url(/images/erinnbarry.jpg)"}}></div>
      <div className="title">{props.title}</div>
      <div className="sub-title">{props.subtitle}</div>
      {/*renderHeaderDetails(props.details)*/}
      {renderSocial({ rg: props.rg, youtube: props.youtube, linkedin: props.linkedin })}
      <div style={{ flexGrow: 1 }} />
      <a href="#about-me" style={{ marginBottom: "32px", color: "white" }}>
        <i className="fa fa-arrow-down" style={{ fontSize: "32px" }} />
      </a>
    </header>
  )
}

function renderHeaderDetails (details) {
  return details.map((texts, idx) => {
    return (
      <div key={idx} className="details">
        {renderHeaderDetailTexts(texts)}
      </div>
    )
  })
}

function renderHeaderDetailTexts (texts) {
  return texts.map((text, idx) => {
    return (
      <div key={idx}>{text}</div>
    )
  })
}

function renderSocial ({ rg, youtube, linkedin }) {
  return (
    <div className="social">
      <a href={linkedin} target="__blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
      <a href={rg} target="__blank" rel="noopener noreferrer"><i className="ai ai-researchgate"></i></a>
      <a href={youtube} target="__blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a>
    </div>
  )
}

export default Header
