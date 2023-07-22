import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Home />
    </BrowserRouter>
  );
}

export default App;
