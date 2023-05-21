import { useSelector } from 'react-redux';
import { TweetCard } from '../TweetCard/TweetCard';
import { Ul, Li, Btn } from './CardList.styled';
import { useState } from 'react';

// import { useState } from "react";
const tweetsPerPage = 3;
export const Cardlist = () => {
  const { items } = useSelector(state => state.tweets);
  const { page } = useSelector(state => state.tweets);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);
  //   const filter = useSelector((state) => state.filter);
  console.log(typeof items);
  console.log(items);
  console.log(page);
  //   console.log(typeof filter);
  //   const getFilteredContacts = () => {
  //     const normalaizedFilter = filter.toLowerCase();
  //     return items.filter((contact) =>
  //       contact.name.toLowerCase().includes(normalaizedFilter)
  //     );
  //   };

  //   const filteredContacts = getFilteredContacts();
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
