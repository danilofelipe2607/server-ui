import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./views/Login";
import store from "./store";
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <Router history={hist}>
      <Routes>
        <Route path="/" element={<Login />} />{" "}
      </Routes>
    </Router>
  </Provider>,
  rootElement
);
