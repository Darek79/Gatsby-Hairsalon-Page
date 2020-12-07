import React from "react"
import { offers } from "./../../Offer/Offer"
import OffersModule from "./OfferCom"

export const OfferMain = () => {
  return (
    <section id="services" className="offer_wrapper">
      <p className="offer_wrapper_title">WHAT WE OFFER</p>
      {offers.map(el => (
        <OffersModule
          key={el.category}
          category={el.category}
          desc={el.desc}
          content={el.content}
        />
      ))}
    </section>
  )
}
