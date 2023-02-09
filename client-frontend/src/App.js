import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Button, Row, Col, ButtonGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./images/background.png"
import './App.css';
import EmployeeContainer from "./components/EmployeeContainer";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import Home from './components/home.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Row style={styles.wrapper} className=" img-responsive">
        <Header />
        <header className='nav'>
          <ButtonGroup>
            <Col xs={0}></Col>
            <Col><Button variant="danger"><Link style={styles.nav} to="/">Home</Link></Button></Col>
            <Col><Button variant="danger"><Link style={styles.nav} to='/search'>Search</Link></Button></Col>
            <Col><Button variant="danger"><Link style={styles.nav} to='/allEmployees'>All Employees</Link></Button></Col>
          </ButtonGroup>
        </header>       
        <main style={styles.main}>
          <Row>
            <Routes>
              <Route index element={<Home />} /> 
              <Route path="search" element={<SearchForm />} />
              <Route path="allEmployees" element={<EmployeeContainer />} />
            </Routes>
        </Row>
        </main>
        <footer style={styles.footer}>
          Copyright &copy; kmj.com {new Date().getUTCFullYear()}
        </footer>
      </Row>
    </BrowserRouter>
  );
}

const styles = {
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
  },
}