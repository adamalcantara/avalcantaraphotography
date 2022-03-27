import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar"

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
        <div className='pageContent'>
          <Route exact path="/" component={Home} />
        </div>
      </div>
    </Router>
  );
}

export default App;
