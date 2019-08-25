import React, { useState } from 'react';

function Feed() {

  const seeFeed = () => {
        console.log('feed component');
  }

  let stylez = {
    padding: '0',
    width: '350px',
    height: '120px',
    border: 'none'
  };

  let zgFeeds = {
    margin: '10px 0 0 0',
    display: 'flex',
    'flex-direction': 'column' 
  }

  return (
    <div style={zgFeeds}>
        <iframe title="#6: Once Upon a Time in Hollywood, Paths of Glory, 45 Years" src="https://www.podbean.com/media/player/68re9-bb2efc?from=yiiadmin&download=1&version=1&skin=1&btn-skin=112&auto=0&share=1&fonts=Helvetica&download=1&rtl=0&pbad=1" style={stylez} scrolling="no" data-name="pb-iframe-player"></iframe>
        <iframe title="#5: Summer Movie Recap, Midsommar Review, Endgame Beats Avatar and the Future of Movie Theaters, Bone Tomahawk, Hot Fuzz  " src="https://www.podbean.com/media/player/5abp8-b8e75c?from=yiiadmin&download=1&version=1&skin=1&btn-skin=112&auto=0&share=1&fonts=Helvetica&download=1&rtl=0&pbad=1" style={stylez} scrolling="no" data-name="pb-iframe-player"></iframe>
    </div>
  );
}

export default Feed;