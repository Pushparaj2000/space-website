import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function Navigation() {
  return (
    <div>
        <Navbar bg="dark" variant="dark
    ">
    <Container>
    <Navbar.Brand style={{fontFamily:"arial"}}><b><i>Pushpa</i></b></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/About">About</Nav.Link>
      <Nav.Link href="/Gallery">Gallery</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

    </div>
  )
}
