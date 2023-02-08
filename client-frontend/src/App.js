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
import EmployeeContainer from "./components/EmployeeContainer"
import Header from "./components/Header"

export default function App() {
  return (
    <BrowserRouter>
      <Row>
        <h2>Main Page</h2>
      </Row>
    </BrowserRouter>
  );
}
    
  const styles = {

  }