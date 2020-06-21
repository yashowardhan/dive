import React from "react";
import Home from "./components/home/index";
import RegisterForm from "./components/home/register";
import Topic from "./components/topic/index";
import SuggestionPage from "./components/suggestion/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/topics" component={Topic} />
          <Route path="/recommend" component={SuggestionPage} />
          {/* <Route path="/course/:slug" component={ManageCoursePage} />
          
          <Route component={PageNotFound} />   */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
