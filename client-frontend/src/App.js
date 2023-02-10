import { React, useState, useEffect } from "react";
import Home from "./components/Home";
import background from "./images/background.png"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './components/Auth';

export default function App() {
  let [authenticated, setAuthenticated] = useState(false);
  let [ loggedInUser, setLoggedInUser] = useState();
  useEffect(() => {
    console.log("loggedInUser:: " + loggedInUser);
    if (loggedInUser) {
      console.log("authenticated(inside useEffect()): " + authenticated);
    }
  }, [loggedInUser]);
    console.log("being redirected to login page");
    return(
      <>
        <button onClick={ () =>setLoggedInUser(loggedInUser ? undefined : {username:"Justin"})}>Login</button>;
        {JSON.stringify(loggedInUser)}
        {loggedInUser ? <Home /> : <Auth setLoggedInUser={setLoggedInUser}/>}
      </>
    )
}

const styles = {
  nav: {
    color: "#FFF",
    fontWeight: 'bold'
  },
  wrapper: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    height: "100vh"
  },
  header: {
    color: "black",
    height: "5%"
  },
  main: {
    height: "90%",
    textPosition: "center"
  },
  footer: {
    position: "absolute",
    bottom: 0,
    height: '5%',
    color: 'black'
  }
}