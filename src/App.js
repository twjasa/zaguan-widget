import StockQuote from "./components/StockQuote";
import { hot } from "react-hot-loader/root";

function App(props) {
  return (
    <div className="App">
      <StockQuote symbol={props.symbol} />
    </div>
  );
}

export default hot(App);
