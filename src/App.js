import './App.css';


import React, { useCallback, useEffect, useState } from 'react';
import Search from './components/search/search';
import Videolist from './components/video/video_list/video_list';

const App = (props) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&key=AIzaSyD5DRCl_fGdxNYXbqN4HVvj9Zh3dPQR6OA'
      , requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .then(error => console.log(error));

  }, []);

  const handleSearchAction = useCallback(search => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&regionCode=KR&key=AIzaSyD5DRCl_fGdxNYXbqN4HVvj9Zh3dPQR6OA'
      , requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .then(error => console.log(error));

  }, []);


  return (
    <ul>
      <Search onSearch={handleSearchAction}/>
      <Videolist videos={videos}/>
    </ul>
  )
};

export default App;
