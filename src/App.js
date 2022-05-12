import './App.css';
import React, { useEffect, useState } from 'react';
import Search from './components/search/search';
import VideoDetail from './components/video/video_detail/video_detail';
import Videolist from './components/video/video_list/video_list';

const App = ({youtube}) => {
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
      <Search onSearch={handleSearchAction}/>
      <VideoDetail videos={seletectedVideo}/>
      <Videolist videos={videos} onClickVideo={clickVideo}/>
    </ul>
  )
};

export default App;
