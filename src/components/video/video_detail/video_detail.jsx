import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video }) => (
  <section className={styles.detail}>
    <iframe
      type="text/html"
      width="100%"
      height="500px"
      src={`http://www.youtube.com/embed/${video.id}`}
      frameborder="0"
      allowFullScreen
    ></iframe>
  </section>
);

export default VideoDetail;