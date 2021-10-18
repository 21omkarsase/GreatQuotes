import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import HighLightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetails = () => {
  const params = useParams();
  const routeMatch = useRouteMatch();
  // console.log(routeMatch);
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: laodedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);
  // const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered">{error}</p>;
  }
  if (!laodedQuote.text) {
    return <p>No Quote Found</p>;
  }
  return (
    <>
      <HighLightedQuote text={laodedQuote.text} author={laodedQuote.author} />

      <Route path={routeMatch.url} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${routeMatch.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${routeMatch.url}/comments`}>
        <Comments />
      </Route>
    </>
  );
};
export default QuoteDetails;
