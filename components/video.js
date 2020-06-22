import React from "react"
import ReactPlayer from "react-player";

const Video = ({
  url,
}) => {
  if (url === "") {
  return (
    <div></div>
  )
} else {
    return (
      <div className="w-full mb-8">
        <div className="player-wrapper">
          <ReactPlayer
          url={url}
          className='react-player'
          width='100%'
          height='100%'
          />
        </div>
      </div>
    )
  }
}

export default Video
