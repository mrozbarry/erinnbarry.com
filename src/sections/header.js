import React from "react"

function Header (props) {
  return (
    <header className="section-header">
      <div className="profile-image" style={{ backgroundImage: "url(/images/erinnbarry.jpg)"}}></div>
      <div className="title">{props.title}</div>
      <div className="sub-title">{props.subtitle}</div>
      {renderHeaderDetails(props.details)}
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

export default Header
