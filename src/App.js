import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/reducer/counter";
import Routes from "./routes";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return <Routes />;
}

export default App;
