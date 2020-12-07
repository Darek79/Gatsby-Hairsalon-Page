import React from "react"
import { CloseX } from "./../../assets/CloseX"

import scrollTo from "gatsby-plugin-smoothscroll"

export const HamburgerLinks = ({ fn, state }) => {
  const closeSidebar = id => {
    scrollTo(id)
    fn()
  }
  return (
    <section className={state ? "hamburger_links" : "hamburger_links_hidden"}>
      <CloseX clName="sidebar_closeX" closeX="sidebar_path" fn={fn} />

      <p className="scroll_link">Navigate to</p>
      <br></br>
      <div className="hamburger_links_wrapper">
        <p className="scroll_link" onClick={() => closeSidebar("#root")}>
          Back to Top
        </p>
        <p className="scroll_link" onClick={() => closeSidebar("#imgGallery")}>
          Go to Image Gallery
        </p>
        <p className="scroll_link" onClick={() => closeSidebar("#map")}>
          Go to Map
        </p>
      </div>
    </section>
  )
}

// className={state ? "hamburger_links" : "hamburger_links_hidden"}
{
  /* <section className="hamburger_links"> */
}
