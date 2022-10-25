import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
     const [error, setError] = useState('');
     const [accepted, setAccepted] = useState(false);

     const {createUser,updateUserProfile,verifyEmail} = useContext(AuthContext);

     const handlaForm = (e) =>{
          e.preventDefault();
          const form = e.target;
          const name = form.name.value;
          const photoUrl = form.photo.value;
          const email = form.email.value;
          const password = form.password.value;
          // console.log(name, adress, email, password);

          createUser(email, password)
          .then(res => {
               const user = res.user;
               form.reset();
               setError('');
               handleUpdateProfile(name, photoUrl);
               handleEmailVerification();
               toast.success('please check email for verify');
               console.log(user);
          })
          .catch(e => {
               console.error(e);
               setError(e.message)
          })


     }

     const handleUpdateProfile = (name, photoURL) =>{
          const profile = {
               displayName: name,
               photoURL: photoURL
          }
          updateUserProfile(profile)
          .then(() =>{})
          .catch(e => console.error(e))
     }

     const handleEmailVerification = () =>{
          verifyEmail()
          .then(() => {})
          .catch(e => console.error(e))
     }

     const handleChecked = (e) =>{
          setAccepted(e.target.checked);
     }
     return (
          <Form onSubmit={handlaForm} className='w-75 mx-auto '>
               <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your name" required/>                    
               </Form.Group>
               <Form.Group className="mb-3">
                    <Form.Label>photo url</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="Enter photo url" />                    
               </Form.Group>
               <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>                    
               </Form.Group>
               <Form.Group className="mb-1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
               </Form.Group>
               <Form.Text className='text-danger'>
                    {error}
               </Form.Text>

               <Form.Check onClick={handleChecked} className='mb-2' 
               type="checkbox" 
               label={<>Accept <Link to='/terms'>terms and conditions</Link></>}/>
               
               <Button variant="primary" type="submit" disabled={!accepted}>
                    Login
               </Button>
          </Form>
     );
};

export default Register;