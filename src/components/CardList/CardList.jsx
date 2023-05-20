import { useSelector } from "react-redux";
import { TweetCard } from "../TweetCard/TweetCard";
import { Ul, Li } from "./CardList.styled";
import { useState } from "react";
// import { useState } from "react";
const tweetsPerPage = 4;
export const Cardlist = () => {
  const { items } = useSelector((state) => state.tweets);
  const { page } = useSelector((state) => state.tweets);
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

  //   return (
  //     <>
  //       <Ul>
  //         {/* {filteredContacts.map((contact) => { */}
  //         {items.map((item) => {
  //           return (
  //             <Li key={item.id}>
  //               <TweetCard
  //                 id={item.id}
  //                 user={item.user}
  //                 tweets={item.tweets}
  //                 followers={item.followers}
  //                 avatar={item.avatar}
  //               />
  //             </Li>
  //           );
  //         })}
  //       </Ul>
  //       <button type="button">
  //         {/* onClick={() => onLoadMore()} */}
  //         Load more
  //       </button>
  //     </>
  //   );
  // };

  return (
    <>
      <Ul>
        {items?.slice(0, next)?.map((item) => {
          return (
            <Li key={item.id}>
              <TweetCard
                id={item.id}
                user={item.user}
                tweets={item.tweets}
                followers={item.followers}
                avatar={item.avatar}
                following={item.following}
              />
            </Li>
          );
        })}
      </Ul>
      {next < items?.length && (
        <button onClick={handleMoreTweets}>Load more</button>
      )}
    </>
  );
};
