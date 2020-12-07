import React from "react"

export default ({ category, desc, content }) => {
  return (
    <section className="offer_desc_module">
      <p className="offer_category">{category}</p>
      <p className="offer_desc">{desc}</p>
      {content.map(el => (
        <div key={el.title} className="offer_desc_prices">
          <p>{el.title}</p>
          <p>{el.price}</p>
        </div>
      ))}
    </section>
  )
}
