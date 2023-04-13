import { BrowserRouter,Switch,Route} from "react-router-dom";


// styles
import './App.css'

// components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/Navbar";


function App() {
  return(
    <BrowserRouter>
      <Navbar />
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
     
      </Switch>
    </BrowserRouter>

  )
}

export default App
