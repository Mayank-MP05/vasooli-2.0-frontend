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
      <div className="md:w-10/12 mx-auto md:my-10 sm:my-3 p-4 bg-white rounded-lg border shadow-md sm:p-3 dark:bg-gray-800 dark:border-gray-700">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
