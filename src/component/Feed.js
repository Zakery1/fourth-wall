import React, { useState } from 'react';
import './Feed.css';

function Feed() {

  const seeFeed = () => {
        console.log('feed component');
  }

  return (
    <div className="zgFeeds">
        <iframe title="#6: Once Upon a Time in Hollywood, Paths of Glory, 45 Years" src="https://www.podbean.com/media/player/68re9-bb2efc?from=yiiadmin&download=1&version=1&skin=1&btn-skin=112&auto=0&share=1&fonts=Helvetica&download=1&rtl=0&pbad=1" className="stylez" scrolling="no" data-name="pb-iframe-player"></iframe>
        <iframe title="#5: Summer Movie Recap, Midsommar Review, Endgame Beats Avatar and the Future of Movie Theaters, Bone Tomahawk, Hot Fuzz  " src="https://www.podbean.com/media/player/5abp8-b8e75c?from=yiiadmin&download=1&version=1&skin=1&btn-skin=112&auto=0&share=1&fonts=Helvetica&download=1&rtl=0&pbad=1" className="stylez" scrolling="no" data-name="pb-iframe-player"></iframe>
        <iframe title="#4: I Am Mother is a Good Netflix Movie, Dark Phoenix Goes Down, Listener Questions, Dog Day Afternoon, and Metro Manila" src="https://www.podbean.com/media/player/vkrjr-b4b4e2?from=yiiadmin&download=1&version=1&skin=1&btn-skin=112&auto=0&share=1&fonts=Helvetica&download=1&rtl=0&pbad=1" className="stylez"  scrolling="no" data-name="pb-iframe-player"></iframe>
        <iframe title="#3 Matt Reeves' Batman Casts Robert Pattinson as the Lead, John Wick a Hit at the Box Office, Booksmart Falters, Movie Recommendations" src="https://www.podbean.com/media/player/h8rje-b34187?from=yiiadmin&download=1&version=1&skin=1&btn-skin=112&auto=0&share=1&fonts=Helvetica&download=1&rtl=0&pbad=1" className="stylez" scrolling="no" data-name="pb-iframe-player"></iframe>
        <iframe title="#2: Avengers, Sonic, Rocketman, Once Upon a Time in Hollywood, Movie Recommendations" src="https://www.podbean.com/media/player/zwa6y-b1e153?from=yiiadmin&download=1&version=1&skin=1&btn-skin=112&auto=0&share=1&fonts=Helvetica&download=1&rtl=0&pbad=1" className="stylez" scrolling="no" data-name="pb-iframe-player"></iframe>
        <iframe title="#1: Star Wars Teaser, Disney Plus, Avengers, Movie Recommendations" src="https://www.podbean.com/media/player/ac6ix-b1e147?from=yiiadmin&download=1&version=1&skin=1&btn-skin=112&auto=0&share=1&fonts=Helvetica&download=1&rtl=0&pbad=1" className="stylez" scrolling="no" data-name="pb-iframe-player"></iframe>
    </div>
  );
}

export default Feed;