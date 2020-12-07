import React from "react"
import { Phone } from "./../assets/Phone"
import { Map } from "./../assets/Map"
import { Email } from "../assets/Email"
import SocialMediaCom from "./../components/FooterComp/LogoWrapper"
import scrollTo from "gatsby-plugin-smoothscroll"

import FooterDiv from "./FooterComp/FooterWrappers"
import { graphql, useStaticQuery } from "gatsby"
export const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteData {
      site {
        siteMetadata {
          adress
          telephone
          contact
        }
      }
    }
  `)
  return (
    <section id='footer' className="footer">
      {console.log(data, "FOOTER")}
      <FooterDiv
        logo={<Map clName="footer_logo" fillMain="#121417" stroke="#F8F9FA" />}
        title="Adresse"
        content={data.site.siteMetadata.adress}
      />
      <FooterDiv
        logo={
          <Phone clName="footer_logo" fillMain="#121417" stroke="#F8F9FA" />
        }
        title="Telefon"
        content={data.site.siteMetadata.telephone}
      />
      <FooterDiv
        logo={
          <Email clName="footer_logo" fillMain="#F8F9FA" stroke="#F8F9FA" />
        }
        title="Kontakt"
        email={true}
        content={data.site.siteMetadata.contact}
      />
      <SocialMediaCom />
      <iframe
        id="map"
        width="425"
        height="350"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        title="open_street_map"
        className="footer_map"
        src="https://www.openstreetmap.org/export/embed.html?bbox=19.93526637554169%2C50.06051041340603%2C19.939595460891727%2C50.06310011086682&amp;layer=mapnik&amp;marker=50.06180527961165%2C19.93743360042572"
      ></iframe>
      <small className="footer_map_desc">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.openstreetmap.org/?mlat=50.06181&amp;mlon=19.93743#map=18/50.06181/19.93743"
        >
          View Larger Map
        </a>
      </small>
      <p className="scroll_link" onClick={() => scrollTo("#root")}>
        Back to Top
      </p>
    </section>
  )
}
