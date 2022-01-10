import './App.css';
import Navbar from './Navbars/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Studio from './componets/Studio';
function App() {
  return (
    <Router>
       <Navbar />
       <Studio />
    </Router>
    
  );
}

export default App;
