import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Drinks from "./Drinks";
import Meals from "./Meals";
import Candies from "./Candies";
import NavBar from "./NavBar";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Route exact path='/drinks'>
          <Drinks />
        </Route>
        <Route exact path='/meals'>
          <Meals />
        </Route>
        <Route exact path='/candies'>
          <Candies />
        </Route>
        <Route exact path='/'>
          <VendingMachine />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
