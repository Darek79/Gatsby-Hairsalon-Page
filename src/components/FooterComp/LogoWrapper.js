import React from "react"
import { Facebook } from "./../../assets/Facebook"
import { Instagram } from "./../../assets/Instagram"

export default () => (
  <section className="footer_logoWrapper">
    <p>Visit us at</p>
    <div className="footer_logoContent_wrapper">
      <div className="footer_logoContent">
        <Facebook
          clName="footer_facebook"
          fillpath1="#121417"
          fillpath2="#f8f9fa"
        />
        <Instagram clName="footer_instagram" fillpath2="#f8f9fa" />
      </div>
    </div>
  </section>
)
