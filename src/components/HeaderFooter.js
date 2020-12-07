import React, { useState, useEffect, memo, Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Phone } from "../assets/Phone"
import { Map } from "../assets/Map"
import { Hamburger } from "../assets/Hamburger"
import { HamburgerLinks } from "./../components/HamburgerLinks/HamburgerLinks"
import { Footer } from "./Footer"

export default memo(({ children }) => (
  <Fragment>
    <section className="content_wrapper">{children}</section>
    <Footer />
  </Fragment>
))
