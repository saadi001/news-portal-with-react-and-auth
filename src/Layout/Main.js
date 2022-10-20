import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/shared/Footer/Footer';
import Header from '../Pages/shared/Header/Header';
import LeftNavbar from '../Pages/shared/LeftNavbar/LeftNavbar';
import RightNabvar from '../Pages/shared/RightNavbar/RightNabvar';

const Main = () => {
     return (
          <div>
               <Header></Header>
               <Container>
                    <Row>
                         <Col lg='2' className='d-none d-lg-block'>
                              <LeftNavbar></LeftNavbar>
                         </Col>
                         <Col lg='7'>
                              <Outlet></Outlet>
                         </Col>
                         <Col lg='3'>
                              <RightNabvar></RightNabvar>
                         </Col>
                    </Row>
               </Container>
               <Footer></Footer>
          </div>
     );
};

export default Main;