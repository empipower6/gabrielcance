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
        <meta charSet="utf-8" />
        <title>Information</title>
        <link rel="icon" href={Favicon} />

        <link
          rel="canonical"
          href="https://www.gabrielcance.com/information/"
        />
      </Helmet>

      <Header />

      <div className="info">{mapParagraphs()}</div>
    </>
  )
}

export default Information
