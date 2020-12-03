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

//STYLES
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navigation />
      <Copyright />
      <Button class="button hire fixed" linkTo="/hire" btnText="Hire me" />

      <div className="page-wrap flex_center">
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch>
            <Route path="/projects" exact component={Projects} />
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
