import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

//Import all the pages
import Headshots from "./Pages/Headshots/Headshots";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
          
            <Route exact path="/headshots" component={Headshots}/>
          
        
        
        
      </div>
    </Router>

  );
}

export default App;
