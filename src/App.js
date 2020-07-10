import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/index";
import SignUp from "./components/signup/SignUp";
import MediaCard from "./components/card/Card";
import Recommend from "./components/recommend/Recommend";
import Topic from "./components/topics/Topic";
import Header from "./components/common/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Footer from "./components/common/Footer";
import Tags from "./components/common/Tags";
import "./App.css";

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    }
  }
});

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#FFFFFF"
    },
    text: {
      primary: '#009362'
    }
  }
});
function App() {

  return (
    <div className="App">
      <Header />
      
      <BrowserRouter>
      <MuiThemeProvider theme={themeDark}>
        <Switch>
          <Route exact path="/feed" component={MediaCard} />
          <Route exact path="/signin" component={Home} />
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
