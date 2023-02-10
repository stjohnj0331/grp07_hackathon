import {BrowserRouter,Routes,Route,Link,Navigate} from "react-router-dom";
import {Button, Row, Col, ButtonGroup} from 'react-bootstrap';
import EmployeeContainer from "../EmployeeContainer";
import background from "../../images/background.png"
import SearchForm from "../SearchForm";
import Header from "../Header";

function Home(){
return (
        <Row style={styles.wrapper} className=" img-responsive">
          <Header />
          <main style={styles.main}>
          <Row>
              <header className='nav'>
              <ButtonGroup>
                  <Col xs={0}></Col>
                  <Col><Button variant="danger"><Link style={styles.nav} to="/">Home</Link></Button></Col>
                  <Col><Button variant="danger"><Link style={styles.nav} to='/search'>Search</Link></Button></Col>
                  <Col><Button variant="danger"><Link style={styles.nav} to='/allEmployees'>All Employees</Link></Button></Col>
              </ButtonGroup>
              </header>
              <Row>
                  <Routes>
                  {/* <Route index element={<Home />} /> */}
                      <Route path="search" element={<SearchForm />} />
                  {/* <Route path="allEmployees" element={<EmployeeContainer />} /> */}
                  </Routes>
              </Row>
          </Row>
          </main>
          <footer style={styles.footer}>
            Copyright &copy; kmj.com {new Date().getUTCFullYear()}
          </footer>
        </Row>
)
}export default Home;

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
    }
  }