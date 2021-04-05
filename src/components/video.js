import React from 'react'
import ReactPlayer from 'react-player'

 const Video = ({url}) => {
    return (
        <>


                <div className="videoOutline">

                 <ReactPlayer className="react-player" url={url} width="100%" height="100%" />
                    
                </div>

        </>
    )
}

export default Video;