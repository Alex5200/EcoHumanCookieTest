import ReactDOM from "react-dom/client";
import Test from "./test/Test.jsx";
import "./index.css";
import { CookiesProvider } from "react-cookie";
import ChekList from "./chekList/ChekList.jsx";
import App from "./App.jsx";
import GlobalFont from './chekList/styleds.js';
ReactDOM.createRoot(document.getElementById("root")).render(
  <CookiesProvider defaultSetOptions={{ path: "/" }}>
    <GlobalFont/>
    <Test />
  </CookiesProvider>,
);
