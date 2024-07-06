import React from "react";

const MusicService = ({ musicService }) => {
  return (
    <div className="musicService-card">
      <div>
        <FaCircle />
        <h4>{musicService.title}</h4>
      </div>
    </div>
  );
};

export default MusicService;
