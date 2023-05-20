import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectError, selectIsLoading } from "../redux/tweets/tweetsSelectors";
import { fetchTweets } from "../redux/tweets/tweetsOperations";
import { Toaster } from "react-hot-toast";
import { Cardlist } from "../components/CardList/CardList";
import { BsArrowLeft } from "react-icons/bs";
import { Div, StyledLink, Span } from "../components/NotFound/NotFound.styled";

const Tweets = () => {
  //   const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <>
      {/* <Wrap> */}
      <h1>Tweets</h1>
      <Div>
        <StyledLink to="/">
          <BsArrowLeft size={20} />
          <Span> Back</Span>
        </StyledLink>
      </Div>
      {/* <ContactForm />
        <TitleH2>Contacts</TitleH2>
        <Filter /> */}
      {isLoading && !error && <b>Request in progress...</b>}
      <Cardlist />
      <Toaster
        toastOptions={{
          style: {
            border: "2px solid #72b372",
            padding: "15px",
            marginTop: "30px",
          },
        }}
      />
      {/* </Wrap> */}
    </>
  );
};

export default Tweets;
