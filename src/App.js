import { BrowserRouter, Route, NavLink } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Cheetos from "./Cheetos";
import Soda from "./Soda";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
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
      </BrowserRouter>
    </div>
  );
}

export default App;
