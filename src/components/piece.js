import React,{useEffect} from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const Piece = ({info}) =>{

   
    const options = {
        renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, 
        text])
       }

    useEffect(()=>{

       

        console.log(info);
    },[])
    return (
        <div className="piece">
            <div className="first-row">
                <div className="media">
                
                    <div className="mediaInner">

                        <GatsbyImage image={info.mediaItems[0].gatsbyImageData} alt={info.title} style={{maxHeight:'100%'}}
                       />

                    </div>

                </div>

                <div className="desc">
                
                    {/* <div className="projectDesc">
                    
                    {info.description ? documentToReactComponents(JSON.parse(info.description.raw),options): ""}
                    </div> */}

                    <p className="projectNumber">{info.projectNumber}</p>

                    <div className="descBottom">
                    <div className="projectTitle">
                        <p>{info.title}</p>
                    </div>
                    <div className="projectYear">
                        <p>{info.year}</p>
                    </div>
                    <div className="projectType">
                        <p>{info.typeOfWork}</p>
                    </div>
                </div> 

                </div>

            </div>
        </div>

    )
}


export default Piece;