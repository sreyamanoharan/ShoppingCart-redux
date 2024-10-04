import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export const MainNavbar=()=> {

    const cartItem = useSelector((state) => state.productDetails.cartItems);
    console.log(cartItem.length);
    
   
    
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">FoodMood</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Badge badgeContent={cartItem.length} color="primary">
          <Link to={'/cart'}><ShoppingCartIcon /></Link>
          </Badge>
       </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

