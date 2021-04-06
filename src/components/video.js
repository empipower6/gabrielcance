import React from 'react'
import ReactPlayer from 'react-player'

 const Video = ({url}) => {
    return (
        <>


                <div className="videoOutline">

                 {/* <ReactPlayer className="react-player" url={url} width="100%" height="100%" /> */}
                 {/* <video className="react-player" controls>
                    <source src={url} />
                 </video>   */}

                 <iframe src={url} width="320" height="240"></iframe>

                </div>

        </>
    )
}

export default Video;