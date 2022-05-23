import { useSelector, useDispatch } from "react-redux";
import Modal from "./common/modal";
import Navbar from "./common/navbar";
import { decrement, increment } from "./redux/reducer/counter";
import Routes from "./routes";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <Modal />
      <Routes />
    </>
  );
}

export default App;
