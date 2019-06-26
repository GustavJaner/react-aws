import React from 'react';

import video from './sample_video.mp4';
// import video from '../public/media/videos/sample_video.mp4';
// which falls outside of the project src/ directory.
// Relative imports outside of src/ are not supported.

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return (
      <div>
        <h2>Video.jsx</h2>
        <video width="320" height="240" loop autoPlay controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}
