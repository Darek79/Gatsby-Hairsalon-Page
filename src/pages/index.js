import React, { Fragment } from "react"
import ContentFooter from "../components/HeaderFooter"
import Header from "../components/Header"
import { Helmet } from "react-helmet"
import { ImageGallery } from "./../components/ImageGallery/ImageGallery"
import { OfferMain } from "./../components/OfferComp/OfferMain"
import { Portrait } from "./../components/Portrait/Portrait"
import "./../styles/global.scss"

export default function Home() {
  return (
    <Fragment>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital@1&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <section className="root" id="root">
        <Header />
        <ContentFooter>
          <Portrait />
          <OfferMain />
          <ImageGallery clName="content_imgGallery" clNameImg="content_img" />
        </ContentFooter>
      </section>
    </Fragment>
  )
}
