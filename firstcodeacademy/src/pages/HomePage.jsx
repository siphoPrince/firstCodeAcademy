import React, { useEffect } from "react";
import "../HomePage.css";

const HomePage = () => {
  useEffect(() => {
    // Dynamically load the YouTube IFrame API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize YouTube player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      new YT.Player("youtube-player", {
        
        videoId: "BI56_1Niats", // Replace with your video ID
        playerVars: {
          autoplay: 0, // Set to 1 for autoplay
          controls: 1, // Show controls
          rel: 0, // Disable related videos
          modestbranding: 1, // Remove YouTube branding
        },
        events: {
          onReady: (event) => {
            console.log("YouTube Player is ready");
          },
          onStateChange: (event) => {
            console.log("Player state changed:", event.data);
          },
        },
      });
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Top Left Section */}
      <div className="top-left">
        <small>Your journey begins here</small>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to FirstCodeAcademy</h1>
          <p className="tagline">From first lines to big ideas</p>
        </div>

        {/* YouTube Video Player */}
        <div className="video-placeholder">
          <div id="youtube-player"></div> {/* Player will load here */}
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;
