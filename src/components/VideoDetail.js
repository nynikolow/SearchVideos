import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading video...</div>;
    }

const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
         <div style={{color:"white"}}>
             <div className="ui embed">
                 <iframe title="video player" src = {videoSrc} />
             </div>
            <div style={{backgroundColor: "#52527a"}} className="ui segment">
                 <h4 style={{color:"white"}} className="ui header"  >{video.snippet.title}</h4>                   
                 <p> {video.snippet.description} </p>
            </div>
         
         </div>
    );

};

export default VideoDetail;