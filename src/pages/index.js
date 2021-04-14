import React,{useEffect} from "react"
import Header from '../components/header'
import Scroll from '../components/scroll'
import Gallery from '../components/gallery'

import { Helmet } from "react-helmet"
import Favicon from '../images/gatsby-icon.png'



import { useStaticQuery, graphql } from 'gatsby'


import '../../stylesheets/style.scss'

export default function Home() {

  let data = useStaticQuery(graphql`
  query{

  pieces : allContentfulArtPiece(sort: {fields: projectNumber}) {
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
  }`
)

  useEffect(()=>{

    //  console.log(data.pieces.nodes);
  },[])
  return(

    
    <div>

      <Helmet>
          <meta charSet="utf-8" />
          <title>Gabriel Cance</title>
          <link rel="icon" href={Favicon} /> 
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
      <Header />

      <Scroll />

      <Gallery allPieces = {data.pieces.nodes} />

    </div>
  )
}
