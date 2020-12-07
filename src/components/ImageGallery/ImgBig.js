import React, { Fragment } from "react"
import { CloseX } from "./../../assets/CloseX"
import Img from "gatsby-image"
export const BigImg = ({ total, state, data, ind, fn, position }) => (
  <Fragment>
    {state ? (
      <section className="imgBig_wrapper" style={{ top: `${position}px` }}>
        {console.log(data)}
        <div className="closeX_wrapper" onClick={fn}>
          <CloseX clName="imgBig_closeX" closeX="imgBig_fill" />
        </div>
        <Img
          fluid={data.allFile.nodes[ind].childImageSharp.fluid}
          className="imgBig_img"
        />
      </section>
    ) : undefined}
  </Fragment>
)
// style={{ top: `${position}px` }}
