import './App.css';
import Navbar from './components/Navbar'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import './index.css';
import Maincontent from './components/Maincontent';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1c1c1eff'
    },
    secondary: {
      main:'#FAF9F0'
    },
    subset: {
      main:'#DE2E2B'
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar />
      <Maincontent />
    </div>
    </ThemeProvider>
  );
}

export default App;
