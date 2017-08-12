import React from "react"

function CvHighlights (props) {
  const flattened = flattenSections(props.sections)
  return (
    <div style={{ textAlign: "center" }}>
      <h1>CV Highlights</h1>

      <div>(See linked CV (above) for complete details)</div>

      <ol className="highlights">
        {listItems(flattened)}
      </ol>

    </div>

  )
}

function flattenSections (sections) {
  return sections.reduce((items, section) => {
    const side = items[items.length - 1] == "left" ? "right" : "left"
    const children = flattenChildren(section.children, side)
    return items
      .concat({ section: section.section, type: "section" })
      .concat(children)
  }, [])
}

function flattenChildren (children, startSide) {
  let side = startSide
  return children.map((child, idx) => {
    const item = {
      type: "event",
      side: side,
      title: child.title,
      dates: child.dates,
      subtitle: child.subtitle,
      location: child.location,
      description: child.description
    }
    side = side == "left" ? "right" : "left"
    return item
  })
}


function listItems (items) {
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
    <li key={idx} className="highlight-section">{section}</li>
  )
}


function CvHighlightEvent (idx, event) {
  return (
    <li key={idx} className={`highlight highlight--${event.side}`}>
      <div className="highlight-title">{event.title}</div>
      <div className="highlight-dates">{event.dates}</div>
      <div className="highlight-subtitle">{event.subtitle}</div>
      <div className="highlight-description">{event.description}</div>
    </li>
  )
}


export default CvHighlights
