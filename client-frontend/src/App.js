import { React, useState, useEffect } from "react";
import Home from "./components/Home";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './components/Auth';

export default function App() {
  //let [authenticated, setAuthenticated] = useState(false);
  let [ loggedInUser, setLoggedInUser] = useState();
  useEffect(() => {
    console.log("loggedInUser:: " + loggedInUser);
    if (loggedInUser) {
      
    }
  }, [loggedInUser]);
    return(
      <>
        {/* <button onClick={ () =>setLoggedInUser(loggedInUser ? undefined : {username:"Justin"})}>Login</button>; */}
        {/* {JSON.stringify(loggedInUser)} */}
        {loggedInUser ? <Home /> : <Auth setLoggedInUser={setLoggedInUser}/>}
      </>
    )
}