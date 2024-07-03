import ReactPlayer from "react-player";
import "./videoplayer.css";

const VideoPlayer = () => {
  //   const videoUrl = "https://web.facebook.com/reel/312976840498306";

  //   const videoUrl =
  //     "https://www.youtube.com/watch?v=yQ9k-yAtKKA&list=RDyQ9k-yAtKKA&start_radio=1";

  const videoUrl = "https://www.youtube.com/watch?v=Mdoj3r0OA7E";

  return (
    <div id="react-player">
      <ReactPlayer controls={true} url={videoUrl} height="350px" width="100%" />
    </div>
  );
};

export default VideoPlayer;
