import React, { useEffect } from "react"
import Header from "../components/header"
import Scroll from "../components/scroll"
import Gallery from "../components/gallery"

import { Helmet } from "react-helmet"
import Favicon from "../images/gatsby-icon.png"

import { useStaticQuery, graphql } from "gatsby"

import "../../stylesheets/style.scss"

export default function Home() {
  let data = useStaticQuery(graphql`
    query {
      pieces: allContentfulArtPiece(sort: { fields: projectNumber }) {
        nodes {
          title
          typeOfWork
          year
          projectNumber
          description {
            raw
          }
          chooseMedia {
            ... on ContentfulImages {
              normalMedia {
                gatsbyImageData(placeholder: TRACED_SVG)
              }
              title
            }
            ... on ContentfulVideoFromUrl {
              videoLink
              aspectRatioHeight
              aspectRatioWidth
            }
            ... on ContentfulGif {
              nameOfGif
              gif {
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    //  console.log(data.pieces.nodes);
  }, [])
  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
        <title>Gabriel Cance</title>
        <meta
          name="description"
          content="Art director and graphic designer based in Montreal, Canada. My work is mainly focused on the development of visual identities, editorials design, illustrations and much more, all in the cultural and commercial fields."
        />
        <link rel="icon" href={Favicon} />
        <link rel="canonical" href="https://www.gabrielcance.com/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta
          name="keywords"
          content="art, art director, graphic, graphic design,montreal, visual,france,uqam,gabriel cance"
        />
        <meta property="og:title" content="Gabriel Cance" />

        <meta
          property="og:description"
          content="Art director and graphic designer based in Montreal, Canada. My work is mainly focused on the development of visual identities, editorials design, illustrations and much more, all in the cultural and commercial fields."
        />

        <meta property="og:url" content="https://www.gabrielcance.com/" />

        <meta property="og:site_name" content="Gabriel Cance" />
      </Helmet>
      <Header />

      <Scroll />

      <Gallery allPieces={data.pieces.nodes} />
    </div>
  )
}
