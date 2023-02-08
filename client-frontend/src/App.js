import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EmployeeContainer from "./components/EmployeeContainer"
import Header from "./components/Header"

    export default function App() {
      return (
        <>
        <Header/>
        <EmployeeContainer/>
        </>
      );
    }
    
  
