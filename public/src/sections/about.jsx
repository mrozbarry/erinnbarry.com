import React from 'react';

function AboutMe (props) {
  return (
    <section className="section-aboutme" name="about-me">
      <div className="info">
        <img src="/images/family.jpg" style={{ width: "100%", height: "auto" }} />
          <ul>{renderSidebarItems(props.sidebar)}</ul>
      </div>
      <div className="content" dangerouslySetInnerHTML={{ __html: props.html }}></div>
    </section>
  )
}

function renderSidebarItems (sidebar) {
  return sidebar.map(([name, value], idx) => {
    const valueContent =
      Array.isArray(value) ?
      value.map((item, subidx) => <div key={subidx}>{item}</div>) :
      value

    return (
      <li key={idx}>
        <div className="name">{name}:</div>
        <div className="value">{valueContent}</div>
      </li>
    )
  })
}

export default AboutMe
