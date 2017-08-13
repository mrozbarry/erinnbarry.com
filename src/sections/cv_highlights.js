import React from "react"

function CvHighlights (props) {
  const flattened = flattenSections(props.sections)
  return (
    <div style={{ textAlign: "center", marginTop: "64px" }}>
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
    const children = flattenChildren(section.children, side, section.icon)
    return items
      .concat({ section: section.section, type: "section" })
      .concat(children)
  }, [])
}

function flattenChildren (children, startSide, icon) {
  let side = startSide
  return children.map((child, idx) => {
    const item = {
      type: "event",
      side: side,
      icon: icon,
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
        return cvHighlightSection(idx, item.section)
        break

      case "event":
        return cvHighlightEvent(idx, item)
        break
    }
  })
}


function cvHighlightSection (idx, section) {
  return (
    <li key={idx} className="highlight-section">{section}</li>
  )
}


function cvHighlightEvent (idx, event) {
	let title = event.title
	const titleLines = title.split("\n")
	if (titleLines.length > 1) {
		title = titleLines.map((line, lineIdx) => {
			return <div key={lineIdx}>{line}</div>
		})
	}

  return (
    <li key={idx} className={`highlight highlight--${event.side}`}>
      <div className="highlight-wrapper">
        <div className="highlight-icon">
          <span className={`fa fa-${event.icon}`} />
        </div>
        <div className="highlight-content">
          <div className="highlight-title">{title}</div>
          <div className="highlight-dates">{event.dates}</div>
          <div className="highlight-subtitle">{event.subtitle}</div>
          <div className="highlight-description">{event.description}</div>
        </div>
      </div>
    </li>
  )
}


export default CvHighlights
