import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import { addQuote } from "../lib/api";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";

const NewQuotes = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  useEffect(() => {
    if (status === "completed") {
      history.push("/GreatQuotes");
    }
  }, [status, history]);
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};
export default NewQuotes;
