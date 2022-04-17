import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

//Import all the pages
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Portraits from "./Pages/Portraits/Portraits";
import Headshots from "./Pages/Headshots/Headshots";

import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div id="pageContent">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portraits" component={Portraits} />
            <Route exact path="/headshots" component={Headshots}/>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
