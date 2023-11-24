
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from "./fond.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "./Image";
import Name from './Name';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Price from './Price';
import product from './product';
import Description from './Description';
const firstName =' watch ';

function App() {
  return (
    <div className="App">
   
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Watch</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">femme</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               homme
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">enfant</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Name/>
    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', height: '80vh',margin:'25px'  }}>
    <Card style={{  width: '18rem', textAlign: 'center'  }}>
      <Card.Img variant="top" src="montre2.jpg" />
      <Card.Body>
        <Card.Title>Smart watch </Card.Title>
        <Card.Text>
          {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}
          <Name  name={ product.name}/>
          <Price productPrice={ product.price}/>
          < Description productDescription={product.description}/>
        </Card.Text>
        <Button variant="primary">ajouter aux panier</Button>
      </Card.Body>
    </Card>
    </div>
    firstName?(
      <div className='condition'>
        <p style={{ color: 'black'}}> Helo, {firstName} !</p>
        <img src="./montre-femme.jpg" alt="montre-femme"/>
        </div>
        
          <p style={{ color: 'red'}}> Hello,There </p>
       
    )
    </div>
  
  );
}

export default App;
