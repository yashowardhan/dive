import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/index";
import SignIn from "./components/signin/Signin"
import SignUp from "./components/signup/SignUp";
import Chatbot from "../src/chatbot/Chatbot";
import ChatbotSound from "../src/chatbot/ChatbotwithSound";
import TagCard from "./components/card/TagCard";
import MediaCard from "./components/card/Card";
import MediaCardBusiness from "./components/card/BusinessCard";
import MediaCardProduct from "./components/card/ProductCard";
import Recommend from "./components/recommend/Recommend";
import Topic from "./components/topics/Topic";
import Header from "./components/common/Header";
import LabelBottomNavigation from "./components/common/BottomNavigation";
import TopNavigator from "./components/common/TopNavigator";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
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
  },
  props: {
    // Name of the component
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true // No more ripple, on the whole application!
    }
  }
});
function App() {

  return (
    <div className="App">
      {/* <TopNavigator /> */}
      
      <BrowserRouter>
      <MuiThemeProvider theme={themeDark}>
        <Switch>
          <Route exact path="/feed" component={MediaCard} />
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/topics" component={Topic} />
          <Route path="/chat-bot" component={Chatbot} />
          <Route path="/chat-bot-sound" component={ChatbotSound} />
          <Route path="/tags/:selectedTag" component={TagCard} />
          <Route exact path="/feed/product" component={MediaCardProduct} />
          <Route exact path="/feed/business-and-strategy" component={MediaCardBusiness} />
          {/* <Route path="/topics" component={Topics} /> */}
          <Route path="/recommend" component={Recommend} />
          {/* <Route path="/course/:slug" component={ManageCoursePage} />
          
          <Route component={PageNotFound} />   */}
        </Switch>
        </MuiThemeProvider>
        <LabelBottomNavigation />
      </BrowserRouter>
      <ToastContainer draggable={false} transition={Bounce} autoClose={3000} />
    </div>
  );
}

export default App;
