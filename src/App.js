// import About from "./components/About";
import Developers from "./components/Developers";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ResultComponent from "./components/ResultComponent";
function App() {
  return (
     <Router>
      <div > 
         <Navbar/>
         <Switch>
            <Route path="/" exact>
               <Home />
            </Route>
            <Route path="/result">
               <ResultComponent />
            </Route>
            {/* <Route path="/about">
               <About />
            </Route> */}
            <Route path="/developers">
              <Developers />
            </Route>
          </Switch>
      </div> 
    </Router>
  );
}

export default App;
