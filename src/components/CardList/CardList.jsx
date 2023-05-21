import { useSelector } from 'react-redux';
import { TweetCard } from '../TweetCard/TweetCard';
import { Ul, Li, Btn } from './CardList.styled';
import { useState } from 'react';

const tweetsPerPage = 3;
export const Cardlist = () => {
  const { items } = useSelector(state => state.tweets);

  const [next, setNext] = useState(tweetsPerPage);
  const handleMoreTweets = () => {
    setNext(next + tweetsPerPage);
  };
  return (
    <>
      <Ul>
        {items?.slice(0, next)?.map(item => {
          return (
            <Li key={item.id}>
              <TweetCard item={item} />
            </Li>
          );
        })}
      </Ul>
      {next < items?.length && <Btn onClick={handleMoreTweets}>Load more</Btn>}
    </>
  );
};
