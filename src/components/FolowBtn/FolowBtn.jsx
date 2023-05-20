import React, { useEffect, useState } from "react";

const FollowBtn = ({ followers }) => {
  const [isFollowing, setIsFollowing] = useState(
    localStorage.getItem("isFollowing") === "true"
  );
  const [followerCount, setFollowerCount] = useState(
    parseInt(localStorage.getItem("followerCount"), 10) || { followers }
  );

  useEffect(() => {
    localStorage.setItem("isFollowing", isFollowing);
    localStorage.setItem("followerCount", followerCount);
  }, [isFollowing, followerCount]);

  const handleFollowClick = () => {
    if (isFollowing) {
      setFollowerCount((prevCount) => prevCount - 1);
    } else {
      setFollowerCount((prevCount) => prevCount + 1);
    }
    setIsFollowing(!isFollowing);
  };

  return (
    <div>
      <button
        onClick={handleFollowClick}
        style={{ backgroundColor: isFollowing ? "green" : "blue" }}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
      <p>Follower count: {followerCount.toLocaleString("en-US")}</p>
    </div>
  );
};

export default FollowBtn;
