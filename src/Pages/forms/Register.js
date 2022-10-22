import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
     const {createUser,user,setUser} = useContext(AuthContext);

     const handlaForm = (e) =>{
          e.preventDefault();
          const form = e.target;
          const name = form.name.value;
          const adress = form.adress.value;
          const email = form.email.value;
          const password = form.password.value;
          console.log(name, adress, email, password);

          createUser(email, password)
          .then(res => {
               const usr = res.user;
               form.reset();
               setUser(name);
               console.log(user);
          })
          .catch(e => console.error(e))


     }
     return (
          <Form onSubmit={handlaForm} className='w-75 mx-auto '>
               <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your name" required/>                    
               </Form.Group>
               <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control name='adress' type="text" placeholder="Enter adress" />                    
               </Form.Group>
               <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>                    
               </Form.Group>

               <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
               </Form.Group>
               
               <Button variant="primary" type="submit">
                    Login
               </Button>
          </Form>
     );
};

export default Register;