import React,{useEffect} from 'react';

import Header from '../components/header'
import { useStaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


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
        <Header />

         <div className="info">
             
                    
            {data.information.nodes[0].description.raw ? documentToReactComponents(JSON.parse(data.information.nodes[0].description.raw),options): ""}
        </div> 
        </>
    )
}

export default Information;