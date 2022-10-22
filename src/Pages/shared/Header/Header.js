import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import {FaUserAlt} from 'react-icons/fa';
import Image from 'react-bootstrap/Image'
import { Button } from 'react-bootstrap';

const Header = () => {
     const {user, logOut} = useContext(AuthContext);

     const handleLogOut = () =>{
          logOut();
     }
     return (
          <Navbar sticky='top' className='mb-3' collapseOnSelect expand="lg" bg="dark" variant="dark">
               <Container>
                    <Navbar.Brand><Link className='text-decoration-none text-white' to='/'>News portal</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                         <Nav className="me-auto">
                              <Nav.Link href="#features">Features</Nav.Link>
                              <Nav.Link href="#pricing">Pricing</Nav.Link>
                              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                   <NavDropdown.Item href="#action/3.2">
                                        Another action
                                   </NavDropdown.Item>
                                   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                   <NavDropdown.Divider />
                                   <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                   </NavDropdown.Item>
                              </NavDropdown>
                         </Nav>
                         <Nav className='d-flex align-items-center'>
                              <Nav.Link >                                   
                                        {
                                             user?.uid ?
                                             <span>{user?.displayName}</span>
                                             : <>
                                                  <Link className='ms-3 text-decoration-none text-white-50 hover:text-white' to='login'>Login</Link>
                                                  <Link className='ms-3 text-decoration-none text-white-50 hover:text-white' to='register'>Register</Link>
                                             </>
                                        }

                              </Nav.Link>
                              <Nav.Link eventKey={2}>
                                   { user?.uid ? 
                                        <>
                                        <Image style={{height:'30px'}} roundedCircle src={user?.photoURL}></Image>                                        
                                        <Button onClick={handleLogOut} variant='danger' className='px-2 py-1 ms-3'>sign out</Button>
                                        </>
                                        : <FaUserAlt></FaUserAlt>
                              }
                              </Nav.Link>
                         </Nav>
                         <div className='d-lg-none'>
                              <LeftNavbar></LeftNavbar>
                         </div>
                    </Navbar.Collapse>
               </Container>
          </Navbar>
     );
};

export default Header;