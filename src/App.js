import './App.css';
import Navbar from './components/Navbar'
import './index.css';
import Maincontent from './components/Maincontent';
import { BrowserRouter, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import useMediaQuery from '@mui/material/useMediaQuery';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const matches = useMediaQuery('(max-width:768px)');

  return (
    <BrowserRouter>
    <div className="App">
        <Route component={AllPosts} path="/blog" exact />
        <Route component={OnePost} path="/:slug" exact/>
        <Route path="/" exact> 
      { matches && <Navbar />}
      <Maincontent />
      <Experience />
      <Projects />
      <Footer />
      </Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
