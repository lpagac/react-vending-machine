import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Cheetos from "./Cheetos";
import Soda from "./Soda";

//switch => only one of these will match

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/cheetos">
          <Cheetos />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route> 
          Snack Not Found
        </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
