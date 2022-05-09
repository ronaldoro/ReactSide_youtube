import './App.css';
import React, { useEffect, useState } from 'react';
import Search from './components/search/search';
import Videolist from './components/video/video_list/video_list';

const App = ({youtube}) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube
      .mostPopular() //
      //.then(videos => setVideos(videos));
  }, []);

  const handleSearchAction = query => {
    youtube
      .search(query) //
      .then(videos => setVideos(videos));
  };


  return (
    <ul>
      <Search onSearch={handleSearchAction}/>
      <Videolist videos={videos}/>
    </ul>
  )
};

export default App;
