import { useSelector, useDispatch } from "react-redux";
import Modal from "./common/modal";
import Navbar from "./common/navbar";
import { decrement, increment } from "./redux/reducer/counter";
import Routes from "./routes";
import BottomPopover from "./common/bottom-popover";
import Dropdown from "./common/dropdown";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <Router>
      <Navbar />
      <Modal />
      <Routes />
    </Router>
  );
}

export default App;
