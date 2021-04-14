import React from 'react'
import { Helmet } from "react-helmet"
import Favicon from '../images/gatsby-icon.png'


const NotFound = ()=>{

    return(
        <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Gabriel Cance</title>
          <link rel="icon" href={Favicon} /> 
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>

        
        <h1> Page Not Found</h1>
        </>
    )
}

export default NotFound;