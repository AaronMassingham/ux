import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//COMPONENTS
import Copyright from "./Components/Copyright";
import Button from "./Components/Button";
import Navigation from "./Components/Navigation";

//PAGES
import Home from "./Home";
import About from "./About";
import Hire from "./Hire";
import Projects from "./Projects";
import Project from "./Project";

//STYLES
import "./App.css";

//DATA
import { projectData } from "./Data/projects.json";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Copyright />
      <Button class="button hire fixed" linkTo="/hire" btnText="Hire me" />

      <div className="page-wrap flex_center">
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch>
            <Route exact path="/projects">
              <Projects projectData={projectData} />
            </Route>
            <Route path="/projects/:projectId">
              <Project data={projectData} />
            </Route>
            <Route path="/hire" exact component={Hire} />
            <Route path="/about" exact component={About} />
            <Route key="/" exact path="/" component={Home} />
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
