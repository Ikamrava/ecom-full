import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { CartContext } from './CartContext';
import { CartContext } from './components/Cart.context';




function Header() {
  const {cart} = useContext(CartContext)
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/">Shophouse</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
           <Nav.Link href="/cart" className={cart.length>0 ? "text-white": null}>Cart ({cart.length}) </Nav.Link> 
          </Nav>
          <Nav>
          {cart.length>0 ?
           <Nav.Link href="/cart"><button className='bg-yellow-300 text-black py-1 px-2 shadow-xl font-bold rounded-lg'>Check-Out</button></Nav.Link>
           : null} 
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
  )
}

export default Header