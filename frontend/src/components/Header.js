import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import SearchBox from './SearchBox'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
<header>
<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
  <Container>
    <Navbar.Brand href='/'>TechShop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Route render={({ history }) => <SearchBox history={history} />} />
      <Nav className="ms-auto">
        <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
        
        {userInfo ? (
          <NavDropdown title={userInfo.name} id='username'>
            <Nav.Link>
              <NavDropdown.Item><Link to='/Profile'>Profile</Link></NavDropdown.Item>
            </Nav.Link>
            <Nav.Link>
              <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
            </Nav.Link>
          </NavDropdown>
        ) : <Nav.Link href="/login"><i className='fas fa-user'></i>Sign In</Nav.Link>
        }
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</header>
  )
}

export default Header