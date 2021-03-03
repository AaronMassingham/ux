import React, {useState} from "react";
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



  
  let location = useLocation();


  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
 
  return (

    
    <div className={isActive ? "App" : "App-dark"}>

      <Navigation onClick={handleToggle} />
      <Copyright onClick={handleToggle} />
      <Button class="button hire fixed" linkTo="/hire" btnText="Hire me" />

      <AnimatePresence exitBeforeEnter initial={true}>
        <Switch location={location} key={location.key}>
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
  );
}

export default App;
