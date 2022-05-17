import React, { useEffect, useState } from 'react';
import Search from './components/search/search';
import VideoDetail from './components/video/video_detail/video_detail';
import Videolist from './components/video/video_list/video_list';
import styles from './App.module.css';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [seletectedVideo, setSeletectedVideo] = useState(null);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, [youtube]);

  const handleSearchAction = query => {
    youtube
      .search(query) //
      .then(videos => setVideos(videos));
  };

  const clickVideo = (video) => {
    setSeletectedVideo(video);
  };


  return (
    <ul>
      <Search onSearch={handleSearchAction} />
      <section className={styles.content}>
        {seletectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={seletectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <Videolist videos={videos} onClickVideo={clickVideo} display={seletectedVideo ? 'list' : 'grid'} />
        </div>
      </section>

    </ul>
  )
};

export default App;
