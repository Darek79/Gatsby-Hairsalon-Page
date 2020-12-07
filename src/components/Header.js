import React, { useState, memo, Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Phone } from "../assets/Phone"
import { Map } from "../assets/Map"
import { Hamburger } from "../assets/Hamburger"
import { Email } from "../assets/Email"
import { HamburgerLinks } from "./../components/HamburgerLinks/HamburgerLinks"
import scrollTo from "gatsby-plugin-smoothscroll"
import { isMobile } from "./../helperfn/helperFn"

export default memo(() => {
  const [showHam, setHam] = useState(false)

  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { extension: {}, relativeDirectory: { eq: "head" } }) {
        nodes {
          base
          childImageSharp {
            fluid(srcSetBreakpoints: [415, 800, 1200], quality: 100) {
              base64
              aspectRatio
              sizes
              src
              srcSet
            }
          }
        }
      }
      site {
        siteMetadata {
          adress
          telephone
          contact
        }
      }
    }
  `)
  const showHamburger = () => {
    console.log("HAM")
    setHam(p => !p)
  }
  return (
    <Fragment>
      <section className="header_title">
        {isMobile() ? undefined : (
          <div className="header_contact_data">
            <div className="header_adress">
              <Map clName="header_logo" fillMain="#121417" stroke="#F8F9FA" />
              <p>{data.site.siteMetadata.adress[0]}</p>,
              <p>{data.site.siteMetadata.adress[1]}</p>
            </div>
            <div className="header_mobile">
              <Phone clName="header_logo" fillMain="#121417" stroke="#F8F9FA" />
              <p>{data.site.siteMetadata.telephone[1]}</p>
            </div>
            <div className="header_email">
              <Email clName="header_logo" fillMain="#F8F9FA" stroke="#F8F9FA" />
              <p>{data.site.siteMetadata.contact[0]}</p>
            </div>
          </div>
        )}

        <HamburgerLinks fn={showHamburger} state={showHam} />
        {/* {showHam ? (
          <HamburgerLinks fn={showHamburger} state={showHam} />
        ) : undefined} */}
        <Img
          fluid={data.allFile.nodes[0].childImageSharp.fluid}
          className="header_img_title"
        />

        {isMobile() ? (
          <div className="navbar">
            <Phone fillMain="#121417" stroke="#F8F9FA" clName="navbar_phone" />
            <Map clName="navbar_map" />
            <Hamburger fn={showHamburger} />
          </div>
        ) : (
          <div className="navbar">
            <p className="header_links" onClick={() => scrollTo("#about_us")}>
              About us
            </p>
            <p className="header_links" onClick={() => scrollTo("#services")}>
              Services
            </p>
            <p className="header_links" onClick={() => scrollTo("#imgGallery")}>
              Image Gallery
            </p>

            <p className="header_links" onClick={() => scrollTo("#footer")}>
              Contact us
            </p>
            <p className="header_links" onClick={() => scrollTo("#footer")}>
              Find us here
            </p>
          </div>
        )}
      </section>
    </Fragment>
  )
})
