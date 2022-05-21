import React, { memo } from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const Videolist = memo((props) => {

    return (
        <ul className={styles.video}>
            {props.videos.map(video => (
                <VideoItem key={video.id} video={video} onClickVideo={props.onClickVideo} display={props.display} />))}
        </ul>
    );      
});

export default Videolist;