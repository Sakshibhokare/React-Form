import logo from './logo.svg';
import './App.css';
import{Navbar, Nav, Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">React-Form</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      
    </div>
  );
}


export default App;
