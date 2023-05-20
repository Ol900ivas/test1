import { useDispatch } from 'react-redux';
import { updateTweetAsync } from '../../redux/tweets/tweetsOperations';
import { Button } from './TweetCard.styled';

export const TweetCard = ({ item }) => {
  const dispatch = useDispatch();

  const id = item.id;
  const newData = {
    followers: item.followers + (item.isFollowing ? -1 : 1),
    isFollowing: !item.isFollowing,
  };
  const handleUpdate = () => dispatch(updateTweetAsync({ id, newData }));

  return (
    <>
      <p>name: {item.user}</p>
      <p>tweets: {item.tweets}</p>
      <p>followers: {item.followers.toLocaleString('en-US')}</p>
      <img src={item.avatar} alt="Avatar" />

      <Button
        onClick={handleUpdate}
        style={{ backgroundColor: item.isFollowing ? 'green' : 'yellow' }}
      >
        {item.isFollowing ? 'Following' : 'Follow'}
      </Button>
    </>
  );
};
