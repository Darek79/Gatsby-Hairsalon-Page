import React, { Fragment } from "react"

export const Phone = ({ fillInside, fillMain, stroke,clName }) => (
  <Fragment>
    <a href="tel:0048733398872">
      <svg
        className={clName}
        data-name="Capa 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 511.98 512"
      >
        <path
          d="M498.83,377.63,435.18,314a45.07,45.07,0,0,0-63.65,0L342.6,342.92a34.14,34.14,0,0,1-48.22,0L169,217.41a34.09,34.09,0,0,1,0-48.22l28.93-28.93a45,45,0,0,0,0-63.66L134.27,13.17a45.05,45.05,0,0,0-63.61-.05l-23.19,23c-63.28,63.28-63.28,166.24,0,229.52l198.69,198.8a162.21,162.21,0,0,0,229.52,0l23.15-23.15A45.06,45.06,0,0,0,498.83,377.63ZM91.83,34.38a15,15,0,0,1,21.24,0L176.7,97.83a15,15,0,0,1,0,21.22l-10.61,10.6L81.28,44.84ZM267.38,443.21,68.69,244.41a131.89,131.89,0,0,1-8.28-178L145,151a64,64,0,0,0,2.78,87.66l125.4,125.5h0a64,64,0,0,0,87.66,2.79l84.56,84.57A131.63,131.63,0,0,1,267.38,443.21Zm210.23-23.14L467,430.67l-84.86-84.86,10.6-10.61a15,15,0,0,1,21.22,0l63.65,63.65A15,15,0,0,1,477.61,420.07Z"
          transform="translate(-0.01 0)"
          // stroke-width="5"
          fill={stroke}
        />
        <path
          d="M91.83,34.38a15,15,0,0,1,21.24,0L176.7,97.83a15,15,0,0,1,0,21.22l-10.61,10.6L81.28,44.84Z"
          transform="translate(-0.01 0)"
          fill={fillMain}
        />
        <path
          d="M392.71,335.3a15,15,0,0,1,21.24,0l63.63,63.43a15,15,0,0,1,0,21.21L467,430.57l-84.81-84.81Z"
          transform="translate(-0.01 0)"
          fill={fillMain}
        />
        <path
          d="M267.38,443.21,68.69,244.41a131.89,131.89,0,0,1-8.28-178L145,151a64,64,0,0,0,2.78,87.66l125.4,125.5h0a64,64,0,0,0,87.66,2.79l84.56,84.57A131.63,131.63,0,0,1,267.38,443.21Z"
          transform="translate(-0.01 0)"
          fill={fillMain}
        />
      </svg>
    </a>
  </Fragment>
)