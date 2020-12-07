/* eslint-disable */
import React, { useState, useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { v1 } from "uuid"
import Img from "gatsby-image"
import { BigImg } from "./ImgBig"

export const ImageGallery = ({ clName, clNameImg }) => {
  const [clickedImg, setImg] = useState(false)
  const indRef = useRef(null)
  const scrollRef = useRef(null)
  const data = useStaticQuery(graphql`
    query ImageGallery {
      allFile(
        filter: { relativeDirectory: { eq: "product" } }
        sort: { fields: sourceInstanceName, order: ASC }
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

  const showImg = e => {
    let img = e.target.closest("span").getAttribute("data-index")
    scrollRef.current = window.scrollY
    indRef.current = img
    console.log(indRef, "indRef")
    console.log(window.scrollY, "scrollY")
    setImg(() => true)
  }
  const closeImg = () => {
    console.log("close")
    setImg(() => false)
  }
  return (
    <section className={clName} id="imgGallery">
      {data.allFile.nodes.map((node, i) => (
        <span
          key={v1()}
          tabIndex="0"
          role="button"
          data-index={i}
          onClick={e => showImg(e)}
        >
          <Img fluid={node.childImageSharp.fluid} className={clNameImg} />
        </span>
      ))}

      <BigImg
        state={clickedImg}
        fn={closeImg}
        data={data}
        ind={indRef.current}
        position={scrollRef.current}
      />
    </section>
  )
}
