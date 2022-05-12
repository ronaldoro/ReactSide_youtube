import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const Videolist = (props) => {

    return (
        <ul className={styles.video}>
            {props.videos.map(video => (
                <VideoItem key={video.id} video={video} onClickVideo={props.onClickVideo} />))}
        </ul>
    );      
};

export default Videolist;