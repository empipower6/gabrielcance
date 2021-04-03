import React,{useEffect} from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Normal from './normal'
import Video from './video'
import Carousel from './carousel'

const Piece = ({info}) =>{

   
    const options = {
        renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, 
        text])
       }

    const findMediaType = () =>{

        let result;

        if(info.chooseMediaType.normalMedia){
            result = <Normal media={info.chooseMediaType} />

       }
       else if(info.chooseMediaType.videoLink){
            result = <Video url={info.chooseMediaType.videoLink} />

       }
       else if(info.chooseMediaType.carouselMedia){
            result =  <Carousel />

       }
       else{
           result =  "";
       }

       return result;


    }

    const findClassName = () =>{

        let result;

        if(info.chooseMediaType.normalMedia){
            result = info.chooseMediaType.normalMedia.length > 1 ? "normalMany":"normalOne";

       }
       else if(info.chooseMediaType.videoLink){
            result = "video"

       }
       else if(info.chooseMediaType.carouselMedia){
            result =  "carousel"

       }
       else{
           result =  "";
       }

       return result;


    }

    useEffect(()=>{


       

    },[])
    return (
        <div className="piece">
            <div className={`row ${findClassName()}`}>
                <div className="media">
            
                        {findMediaType()}
                </div>

                <div className="desc">
                
                    

                    <p className="projectNumber">{info.projectNumber}</p>

                    <div className="descBottom">

                        <div className="projectDesc">
                        
                        {info.description ? documentToReactComponents(JSON.parse(info.description.raw),options): ""}
                        </div>
                        <div className="furtherBottom">
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
        </div>

    )
}


export default Piece;