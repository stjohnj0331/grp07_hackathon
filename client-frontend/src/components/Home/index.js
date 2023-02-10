import {Routes,Route,Link} from "react-router-dom";
import {Button, Row, Col, ButtonGroup} from 'react-bootstrap';
import EmployeeContainer from "../EmployeeContainer";
import EntryPage from "./EntryPage";
import background from "../../images/background.png"
import SearchForm from "../SearchForm";
import Header from "../Header";

function Home(username){
return (
  <>
        <Row style={styles.wrapper} className=" img-responsive">
          <Header />
          <main style={styles.main}>
          <Row>
              <header className='nav'>
              <ButtonGroup style={styles.buttonGroup}>
                  <Col xs={0}></Col>
                  <Col><Button style={styles.button} variant="danger"><Link style={styles.nav} to="/">Home</Link></Button></Col>
                  <Col><Button style={styles.button} variant="danger"><Link style={styles.nav} to='/search'>Search</Link></Button></Col>
                  <Col><Button style={styles.button} variant="danger"><Link style={styles.nav} to='/allEmployees'>All Employees</Link></Button></Col>
              </ButtonGroup>
              </header>
              <Row>
                  <Routes>
                      <Route index element={<EntryPage />} /> 
                      <Route path="search" element={<SearchForm username={username.username}/>} />
                      <Route path="allEmployees" element={<EmployeeContainer username={username.username}/>} />
                  </Routes>
              </Row>
          </Row>
          </main>
          <footer style={styles.footer}>
            Copyright &copy; kmj.com {new Date().getUTCFullYear()}
          </footer>
        </Row>
        </>
)
}export default Home;

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
  },
  button: {
    width: '200px',
    padding: '5px',
    margin: '2px'
  },
  buttonGroup: {
    margin: '5px',
    padding: '10px'
  }
}