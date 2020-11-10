import React from "react";

import LogoModal from "../../modal/LogoModal";
import LinkModal from "../../modal/LinkModal";

import podcastPlatforms from "../../resource/podcastPlatforms";

import "./Header.scss";

function Header() {
  const platformLinks = podcastPlatforms.map((platform) => {
    return <LinkModal key={platform.id} platform={platform} />;
  });
  return (
    <div className="zg-block-holder">
      <LogoModal />

      <div className="zg-about-platforms">
        <p className="zg-about">
          The Stage 18 Podcast is the greatest movie podcast in the history of
          recorded audio. Zak and Cody, from two very different perspectives,
          discuss new movies, old movies, and movie news.
        </p>
        <span>Listen to the Stage 18 Podcast on the following platforms:</span>
        {platformLinks}
        <br />
        <a className="zg-discord-link" href="https://discord.gg/6SfpWsf">
          Join our Discord Server!
        </a>
      </div>
    </div>
  );
}

export default Header;
