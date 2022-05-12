import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video: { snippet }, onClickVideo }) => (
    <li className={styles.container} onClick={()=>onClickVideo()}>
        <div className={styles.video}>
            <img className={styles.thumbnail}
                src={snippet.thumbnails.medium.url}
                alt='video thumbnail' />
            <div>
                <p className={styles.title}>{snippet.title}</p>
                <p className={styles.channel}>{snippet.channelTitle}</p>
            </div>
        </div>
    </li>
);

export default VideoItem;