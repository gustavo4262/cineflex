import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from "./Components/Top";
import HomePage from "./Components/HomePage";
import SessionPage from "./Components/SessionPage";
import SeatPage from "./Components/SeatPage";
import SuccessPage from "./Components/SuccessPage";

import "./styles/reset.css";
import "./styles/style.css";
import { useState } from "react";

function App() {
  const [sessionInfo, setSessionInfo] = useState([]);

  return (
    <BrowserRouter>
      <Top></Top>
      <Switch>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
        <Route path="/sessoes/:idMovie" exact>
          <SessionPage></SessionPage>
        </Route>
        <Route path="/assentos/:idSession" exact>
          <SeatPage setSessionInfo={setSessionInfo}></SeatPage>
        </Route>
        <Route path="/sucesso" exact>
          <SuccessPage info={sessionInfo}></SuccessPage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
