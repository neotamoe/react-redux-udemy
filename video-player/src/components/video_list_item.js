import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video;  // {video} is same as putting props in as parameter and then declaring video as const

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={video.snippet.thumbnails.default.url}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
