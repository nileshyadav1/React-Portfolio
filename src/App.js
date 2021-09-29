import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {  useSelector } from "react-redux";
import {     isLightMode } from "./store/ToggleLightModeSlice";

import Skills from "./components/Skills/Skills";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Sidebar from "./components/SideBar/Sidebar";
import "./App.css";

function App() {
  const IsThemeLight = useSelector(isLightMode);
  return (
    <div className={`App ${IsThemeLight ? "light" : ""}`} >
        <Router>
      <Sidebar />
      
      <div className="app-content ">
    
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          
      </div>
      </Router>
    </div>
  );
}

export default App;
