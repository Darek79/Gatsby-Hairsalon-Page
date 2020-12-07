import React from "react"
import { v1 } from "uuid"
export default ({
  title,
  content,
  email = false,
  cl = "footer_desc_wrapper",
  logo,
}) => (
  <section className={cl}>
    <div className="footer_desc_title">
      {logo}
      <p>{title}</p>
    </div>
    <div className="footer_desc_content">
      {!email ? (
        content.map(el => <p key={v1()}>{el}</p>)
      ) : (
        <a className="email_link" href={`mailto:${content}`}>
          {content}
        </a>
      )}
    </div>
  </section>
)
