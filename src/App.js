
import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import HomePage from './components/homePage';
import CV from './components/CV';
import Portfolio from './components/portfolio';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Footer from './components/footer';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      
       <Router>
         <Navbar/>
         <Switch>
           <Route  exact path="/" component={HomePage} />
           <Route  path="/home" component={HomePage} />
           <Route  path="/CV"  component={CV} />
           <Route  path="/Portfolio" component={Portfolio} />
           <Route  path="/Project/:id" component={Project} />
           <Route  path="/Contact"  component={Contact} />
           <Route  path="/About" component={About} />
         </Switch>
         <Footer/>
       </Router>
    </div>
  );
}

export default App;
