import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from '../redux/tweets/tweetsSelectors';
import { fetchTweetsAsync } from '../redux/tweets/tweetsOperations';
import { Toaster } from 'react-hot-toast';
import { Cardlist } from '../components/CardList/CardList';
import { BsArrowLeft } from 'react-icons/bs';
import { Div, StyledLink, Span } from '../components/NotFound/NotFound.styled';
import Loader from 'components/Loader/Loader';

const Tweets = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTweetsAsync());
  }, [dispatch]);

  return (
    <>
      <h1>Tweets</h1>
      <Div>
        <StyledLink to="/">
          <BsArrowLeft size={20} />
          <Span> Back</Span>
        </StyledLink>
      </Div>

      <Cardlist />
      {isLoading && !error && <Loader />}
      <Toaster
        toastOptions={{
          style: {
            border: '2px solid #72b372',
            padding: '15px',
            marginTop: '30px',
          },
        }}
      />
    </>
  );
};

export default Tweets;
