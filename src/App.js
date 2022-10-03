import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Upload from './Upload.js';
import About from './About.js';
import Home from './Home';
import NavBar from './NavBar';
import data from './db.js';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home data="data"/>
        </Route>
        <Route path="/upload">
          <Upload />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
