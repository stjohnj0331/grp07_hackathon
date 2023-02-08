import React from "react";
import { BrowserRouter as 
  BrowserRouter,
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Button, Row, Col, ButtonGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./images/background.png"
import EmployeeContainer from "./components/EmployeeContainer"
import Header from "./components/Header"

export default function App() {
  return (
    <BrowserRouter>
      <Row styles={styles.wrapper}>
        <header style={styles.main}>
          <h4>HEADER</h4>
        </header>
        <main style={styles.main}>
          <h2>Main Page</h2>
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
      //backgroundRepeat: "repeat",
      //overflowX: "scroll",
      height: "100vh"
    }, 
    header:{
      color: "black",
      height: "5%"
    },
    main:{
      height: "90%"
    },
    footer:{
      position: "absolute",
      bottom: 0,
      height: '5%', 
      color: 'black'
    }
  }