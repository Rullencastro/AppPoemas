import "./styles/App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Lista from "./components/Lista";
import Header from "./components/Header";
import Signup from "./components/Signup";
import PoemInfo from "./components/PoemInfo";
import Home from "./components/Home";
import { store } from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/list" element={<Lista />}></Route>
          <Route path="/poem_info" element={<PoemInfo />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
