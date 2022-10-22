import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import { AuthContext } from '../../../contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightNabvar = () => {
     const {providerLogin} = useContext(AuthContext);
     const googleProvider = new  GoogleAuthProvider();

     const handleGoogleSignin = ()=>{
          providerLogin(googleProvider)
          .then(result => {
               const user = result.user;
               console.log(user)
          })
          .catch(error => console.error(error))
     }
     return (
          <div>
               <ButtonGroup className='w-100' vertical >
                    <Button onClick={handleGoogleSignin} className='mb-2' variant="outline-primary">Sign with google</Button>
                    <Button variant="outline-dark">sign with github</Button>
               </ButtonGroup>
               <div className='mt-3'>
                    <h4>Find us on</h4>
                    <ListGroup>
                         <ListGroup.Item className='mb-2'>Facebook</ListGroup.Item>
                         <ListGroup.Item className='mb-2'>Whatsapp</ListGroup.Item>
                         <ListGroup.Item className='mb-2'>Twitter</ListGroup.Item>
                         <ListGroup.Item className='mb-2'>Twitch</ListGroup.Item>
                         <ListGroup.Item className='mb-2'>Terms and conditions</ListGroup.Item>
                    </ListGroup>
                    <div className='mt-2 w-100'>
                         <Carousel>
                              <Carousel.Item>
                                   <img
                                        className="d-block w-100"
                                        src="holder.js/800x400?text=First slide&bg=373940"
                                        alt="First slide"
                                   />
                                   <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                   </Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                   <img
                                        className="d-block w-100"
                                        src="holder.js/800x400?text=Second slide&bg=282c34"
                                        alt="Second slide"
                                   />

                                   <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                   </Carousel.Caption>
                              </Carousel.Item>
                         </Carousel>
                    </div>

               </div>
          </div>
     );
};

export default RightNabvar;