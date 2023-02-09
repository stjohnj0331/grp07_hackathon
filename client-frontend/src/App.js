import React from "react";
import { BrowserRouter, Route, Link} from "react-router-dom";
import {Button, Row, Col, ButtonGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./images/background.png"
import './App.css';
import EmployeeContainer from "./components/EmployeeContainer"
import Auth from "./components/Auth"
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Row style={styles.wrapper} className=" img-responsive">
       <Header/>
        <main style={styles.main}>
          <Auth/>
         {/* <EmployeeContainer/> */}
        </main>
        <footer style={styles.footer}>
          Copyright &copy; kmj.com {new Date().getUTCFullYear()}
        </footer>
      </Row>
    </BrowserRouter>
  );
}
    
  const styles = {
    wrapper:{
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      height: "100vh"
    }, 
    header:{
      color: "black",
      height: "5%"
    },
    main:{
      height: "90%",
      textPosition: "center"
    },
    footer:{
      position: "absolute",
      bottom: 0,
      height: '5%', 
      color: 'black'
    }
  }