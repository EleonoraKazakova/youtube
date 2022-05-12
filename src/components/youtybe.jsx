import YouTube from "react-youtube";

export default function YoutubePlayer() {
  function onReady(event) {
    event.target.pauseVideo();
  }
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const videoId = "wE_dvTtnUoc";
  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={(event) => onReady(event)}
    />
  );
}
