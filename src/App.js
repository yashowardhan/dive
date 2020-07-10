import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/index";
import SignIn from "./components/signin/Signin"
import SignUp from "./components/signup/SignUp";
import MediaCard from "./components/card/Card";
import Recommend from "./components/recommend/Recommend";
import Topic from "./components/topics/Topic";
import Header from "./components/common/Header";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Tags from "./components/common/Tags";
import "./App.css";

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#FFFFFF"
    },
    text: {
      primary: '#000000'
    }
  }
});
function App() {

  return (
    <div className="App">
      {/* <Header /> */}
      
      <BrowserRouter>
      <MuiThemeProvider theme={themeDark}>
        <Switch>
          <Route exact path="/feed" component={MediaCard} />
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/topics" component={Topic} />
          <Route path="/tags" component={Tags} />
          {/* <Route path="/topics" component={Topics} /> */}
          <Route path="/recommend" component={Recommend} />
          {/* <Route path="/course/:slug" component={ManageCoursePage} />
          
          <Route component={PageNotFound} />   */}
        </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
      

      {/* <Footer /> */}
    </div>
  );
}

export default App;
