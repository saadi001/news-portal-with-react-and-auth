import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
     const [error, setError] = useState('') ;
     const {signIn} = useContext(AuthContext);
     const navigate = useNavigate();
     const location = useLocation();

     const from = location.state?.from?.pathname || '/';

     const handlaForm = (e) =>{
          e.preventDefault();
          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;

          signIn(email, password)
          .then(res =>{
               const user = res.user;
               form.reset();
               setError('');
               navigate(from, {replace: true});
               console.log(user);
          })
          .catch(e => {
               console.error(e);
               setError(e.message);
          });
          
     }
     return (
          <Form onSubmit={handlaForm} className='w-75 mx-auto '>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>                    
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
               </Form.Group>

               <Form.Text className='text-danger'>
                    {error}
               </Form.Text><br/>
               
               <Button variant="primary" type="submit">
                    Login
               </Button>
               
          </Form>
     );
};

export default Login;