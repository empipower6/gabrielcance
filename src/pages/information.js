import React,{useEffect} from 'react';

import Header from '../components/header'
import { useStaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { Helmet } from "react-helmet"
import Favicon from '../images/gatsby-icon.png'

const Information = () =>{

    const options = {
        renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, 
        text])
       }


    let data = useStaticQuery(graphql`
    query{

        information : allContentfulInformation {
            nodes {
            description {
                raw
            }
            }
        }

    }

      `)

      useEffect(()=>{

        
      },[])
    return(
        <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Information</title>
          <link rel="icon" href={Favicon} /> 

          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>

        <Header />

         <div className="info">
             
                    
            {data.information.nodes[0].description.raw ? documentToReactComponents(JSON.parse(data.information.nodes[0].description.raw),options): ""}
        </div> 
        </>
    )
}

export default Information;