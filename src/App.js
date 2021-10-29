import './App.css';
import Navbar from './components/Navbar'
import './index.css';
import Maincontent from './components/Maincontent';
import useMediaQuery from '@mui/material/useMediaQuery';


function App() {
  const matches = useMediaQuery('(max-width:768px)');

  return (
    <div className="App">
      { matches && <Navbar />}
      <Maincontent />
    </div>
  );
}

export default App;
