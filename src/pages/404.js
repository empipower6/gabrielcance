import React from "react"
import { Helmet } from "react-helmet"
import Favicon from "../images/gatsby-icon.png"
import Header from "../components/header"

const NotFound = () => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <meta charSet="utf-8" />
        <title>Gabriel Cance</title>
        <link rel="icon" href={Favicon} />
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Header />

      <h1 style={{ color: "white", fontSize: "11px", paddingTop: "20px" }}>
        {" "}
        Page Not Found
      </h1>
    </>
  )
}

export default NotFound
