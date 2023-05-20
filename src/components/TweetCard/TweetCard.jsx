import { useDispatch } from 'react-redux';
import { updateTweetAsync } from '../../redux/tweets/tweetsOperations';
import { Card, Button, Avatar, AvatarWrap } from './TweetCard.styled';

export const TweetCard = ({ item }) => {
  const dispatch = useDispatch();

  const id = item.id;
  const newData = {
    followers: item.followers + (item.isFollowing ? -1 : 1),
    isFollowing: !item.isFollowing,
  };
  const handleUpdate = () => dispatch(updateTweetAsync({ id, newData }));

  return (
    <Card>
      <p>name: {item.user}</p>
      <p>tweets: {item.tweets}</p>
      <p>followers: {item.followers.toLocaleString('en-US')}</p>
      <AvatarWrap>
        <Avatar src={item.avatar} alt="Avatar" />
      </AvatarWrap>
      <Button
        onClick={handleUpdate}
        style={{ backgroundColor: item.isFollowing ? '#5CD3A8' : '#EBD8FF' }}
      >
        {item.isFollowing ? 'Following' : 'Follow'}
      </Button>
    </Card>
  );
};
