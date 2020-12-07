/* eslint-disable */
import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { desc } from "./../../Description/desc"
import { Arrow } from "./../../assets/ArrowUp"
import { isMobile } from "./../../helperfn/helperFn"
import Img from "gatsby-image"
export const Portrait = () => {
  const [arrow, setArrow] = useState(false)
  const [arrow1, setArrow1] = useState(false)
  const [isM, setM] = useState(false)

  useEffect(() => {
    if (isMobile()) {
      console.log("sadasdfsa")
      setM(() => true)
    }
  }, [])

  const data = useStaticQuery(graphql`
    query ImagePortrait {
      allFile(
        filter: { relativePath: {}, relativeDirectory: { eq: "portrait" } }
      ) {
        nodes {
          base
          childImageSharp {
            fluid(
              quality: 75
              srcSetBreakpoints: [415, 800, 1200]
              traceSVG: { background: "#03045e" }
            ) {
              base64
              sizes
              src
              srcSet
              aspectRatio
            }
          }
        }
      }
    }
  `)

  const arrowTurn = () => {
    setArrow(p => !p)
  }
  const arrowTurn1 = () => {
    setArrow1(p => !p)
  }
  return (
    <section className="portrait">
      {console.log(isMobile(), "arrow")}
      <Img
        fluid={data.allFile.nodes[0].childImageSharp.fluid}
        className="portrait_img"
        objectFit={"contain"}
      />
      <div className="portrait_desc_wrapper">
        <p id="about_us" className="portrait_title">
          About us
        </p>
        <p className="portrait_desc">{desc.aboutStore}</p>
        <div
          tabIndex="0"
          role="button"
          className="portrait_title_con"
          onClick={arrowTurn}
        >
          <p className="portrait_title">Qualifications</p>
          {isM ? (
            <Arrow
              tabIndex="0"
              role="button"
              fill={"#121417"}
              fn={arrowTurn}
              state={arrow}
            />
          ) : undefined}
        </div>
        {arrow || !isMobile() ? (
          <ul className="portrait_desc portrait_ul">
            {desc.qual.map(el => {
              return <li key={el}>{el}</li>
            })}
          </ul>
        ) : undefined}
        <div
          tabIndex="0"
          role="button"
          className="portrait_title_con"
          onClick={arrowTurn1}
        >
          <p className="portrait_title">What we focus on</p>
          {isM ? (
            <Arrow
              tabIndex="0"
              role="button"
              fill={"#121417"}
              fn={arrowTurn}
              state={arrow1}
            />
          ) : undefined}
        </div>
        {arrow1 || !isMobile() ? (
          <ul className="portrait_desc portrait_ul">
            {desc.focus.map(el => {
              return <li key={el}>{el}</li>
            })}
          </ul>
        ) : undefined}
      </div>
    </section>
  )
}
