import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateTweetAsync } from '../../redux/tweets/tweetsOperations';
import {
  Card,
  Button,
  Avatar,
  AvatarWrap,
  ImgWrap,
  Picture,
  Logo,
  InfoWrap,
  InfoTweets,
  InfoFollowers,
} from './TweetCard.styled';
import logo from '../../images/logo.png';
import picture from '../../images/picture.png';

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
      <ImgWrap>
        <Logo src={`${logo}`} alt="logo" />
        <Picture src={`${picture}`} alt="picture" />

        <AvatarWrap>
          <Avatar src={item.avatar} alt={item.user} />
        </AvatarWrap>
      </ImgWrap>
      <InfoWrap>
        <InfoTweets>tweets: {item.tweets}</InfoTweets>
        <InfoFollowers>
          followers: {item.followers.toLocaleString('en-US')}
        </InfoFollowers>
        <Button
          onClick={handleUpdate}
          style={{ backgroundColor: item.isFollowing ? '#5CD3A8' : '#EBD8FF' }}
        >
          {item.isFollowing ? 'Following' : 'Follow'}
        </Button>
      </InfoWrap>
    </Card>
  );
};

TweetCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    isFollowing: PropTypes.bool.isRequired,
    tweets: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired,
};
