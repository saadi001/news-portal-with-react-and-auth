import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
     const {signIn} = useContext(AuthContext);

     const handlaForm = (e) =>{
          e.preventDefault();
          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;

          signIn(email, password)
          .then(res =>{
               const user = res.user;
               form.reset();
               console.log(user);
          })
          .catch(e => console.error(e));
          
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
               
               <Button variant="primary" type="submit">
                    Login
               </Button>
          </Form>
     );
};

export default Login;