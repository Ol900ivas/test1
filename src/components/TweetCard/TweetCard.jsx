// import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
// import { deleteContact } from "redux/contacts/contactsOperations";
// import { RxCross2 } from "react-icons/rx";

import { toggleIsFollowing } from "../../redux/tweets/tweetsOperations";
import FollowBtn from "../FolowBtn/FolowBtn";
import { Button } from "./TweetCard.styled";

export const TweetCard = ({
  id,
  user,
  tweets,
  followers,
  avatar,
  isFollowing,
}) => {
  const dispatch = useDispatch();
  //   const handleClick = () => {
  //     dispatch(deleteContact(id));
  //   };
  const handleToggle = () => dispatch(toggleIsFollowing(user));

  return (
    <>
      <p>name: {user}</p>
      <p>tweets: {tweets}</p>
      <p>followers: {followers.toLocaleString("en-US")}</p>
      <img src={avatar} alt="Avatar" />

      <Button
        onClick={handleToggle}
        style={{ backgroundColor: isFollowing ? "green" : "yellow" }}
      >
        {/* <Button onClick={handleClick}> */}
        {/* <RxCross2 size="20px" /> */}
        {isFollowing ? "Following" : "Follow"}
      </Button>
      <FollowBtn followers={followers} />
    </>
  );
};

// TweetCard.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };
