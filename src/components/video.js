import React,{useRef} from 'react'
import ReactPlayer from 'react-player'

 const Video = ({data}) => {

 

    const frame= useRef(null);

    const findHeight = () =>{

        let aspectRatio = data.aspectRatioHeight/data.aspectRatioWidth;


         let height= 36*aspectRatio+'vw';

                return height;
            
      }
    return (
        <>



                 <ReactPlayer className="react-player" ref={frame} url={data.videoLink} width='36vw' height={findHeight()} onReady={findHeight()} />
                 

        </>
    )
}

export default Video;