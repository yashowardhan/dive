import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/index";
import SignUp from "./components/signup/SignUp";
import MediaCard from "./components/card/Card";
import Recommend from "./components/recommend/Recommend";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Tags from "./components/common/Tags";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Tags />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MediaCard} />
          <Route exact path="/signin" component={Home} />
          <Route path="/signup" component={SignUp} />

          <Route path="/tags" component={Tags} />
          {/* <Route path="/topics" component={Topics} /> */}
          <Route path="/recommend" component={Recommend} />
          {/* <Route path="/course/:slug" component={ManageCoursePage} />
          
          <Route component={PageNotFound} />   */}
        </Switch>
      </BrowserRouter>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
