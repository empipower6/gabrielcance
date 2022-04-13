import React from "react"

import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"

import { Helmet } from "react-helmet"
import Favicon from "../images/gatsby-icon.png"

const Information = () => {
  let data = useStaticQuery(graphql`
    query {
      information: allContentfulInformation {
        nodes {
          description {
            raw
          }
        }
      }
    }
  `)

  const mapParagraphs = () => {
    const rawData = data.information.nodes[0].description.raw
    const jsonData = JSON.parse(rawData)
    let finalData = []
    jsonData.content.map(para => {
      finalData.push(para.content[0].value.split("\n").join("<br/>"))
    })
    return finalData.map((para, index) => (
      <div index={`paragraph-${index}`}>
        <p dangerouslySetInnerHTML={{ __html: para }}></p>
      </div>
    ))
  }
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta charSet="utf-8" />
        <title>Information about Gabriel Cance</title>
        <link rel="icon" href={Favicon} />

        <link
          rel="canonical"
          href="https://www.gabrielcance.com/information/"
        />

        <meta
          name="description"
          content="Art director and graphic designer based in Montreal, Canada. My work is mainly focused on the development of visual identities, editorials design, illustrations and much more, all in the cultural and commercial fields."
        />
        <link rel="icon" href={Favicon} />
        <link
          rel="canonical"
          href="https://www.gabrielcance.com/information/"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />

        <meta property="og:title" content="Information about Gabriel Cance" />

        <meta
          property="og:description"
          content="Art director and graphic designer based in Montreal, Canada. My work is mainly focused on the development of visual identities, editorials design, illustrations and much more, all in the cultural and commercial fields."
        />

        <meta
          property="og:url"
          content="https://www.gabrielcance.com/information/"
        />

        <meta
          property="og:site_name"
          content="Information about Gabriel Cance"
        />
      </Helmet>

      <Header />

      <div className="info">{mapParagraphs()}</div>
    </>
  )
}

export default Information
