import React from 'react';

const VideoListItem = (props) => {
  // const video = props.video;  // {video} is same as putting props in as parameter and then declaring video as const

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={props.video.snippet.thumbnails.default.url}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{props.video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
