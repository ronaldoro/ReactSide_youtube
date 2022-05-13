import React from 'react';

const VideoDetail = ({video}) => (
    <iframe id="player" type="text/html" width="640" height="360"
  src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
  frameborder="0"></iframe>
);

export default VideoDetail;