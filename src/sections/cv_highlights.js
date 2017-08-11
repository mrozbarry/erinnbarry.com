import React from "react"

function CvHighlights (props) {
  return (
    <div>
      <h1>CV Highlights</h1>

      <div>(See linked CV (above) for complete details)</div>

      <ol className="highlights">
        <li className="highlights-section">Research Experience</li>

        <li className="highlight highlight--left">
          <div className="highlight-title">Research Assistant</div>
          <div className="highlight-dates">(2015 - Present)</div>
          <div className="highlight-subtitle">Some subtitle information and stuff</div>
          <div className="highlight-description">Some content and stuff goes here</div>
        </li>
      </ol>

    </div>

  )
}

function flattenSections (sections) {
  let side = "left"

  return sections.reduce((items, section) => {
    const children = flattenChildren(section.children, side)
    side = children[children.length - 1].side
    side = side == "left" ? "right" : "left"
    return items
      .concat({ section: section.section })
      .concat(children)
  }, [])
}

function flattenChildren (children, startSide) {
}


function CvHighlight (items) {
  return items.map((item, idx) => {
    switch (item.type) {
      case "section":
        return CvHighlightSection(idx, item.section)
        break

      case "event":
        return CvHighlightEvent(idx, item)
        break
    }
  })
}


function CvHighlightSection (idx, section) {
  return (
    <li key={idx} className="highlight-title">{section}</li>
  )
}


function CvHighlightEvent (idx, event) {
  return (
    <li className="highlight highlight--left">
      <div className="highlight-title">Research Assistant</div>
      <div className="highlight-dates">(2015 - Present)</div>
      <div className="highlight-subtitle">Some subtitle information and stuff</div>
      <div className="highlight-description">Some content and stuff goes here</div>
    </li>
  )
}


export default CvHighlights
