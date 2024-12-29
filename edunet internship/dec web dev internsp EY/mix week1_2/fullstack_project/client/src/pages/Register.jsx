import React, { useState } from 'react'
import '../styles/login.css'

import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'

    
const Register = () => {

  const [credentials,setCredentials]= useState({
    userName:undefined,
    email:undefined,
    password:undefined
})

  const handleChange = e =>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
  };

  const handleClick = e =>{
    e.preventDefault();
  }

  return (
<section>
  <Container>
    <Row>
      <Col lg='8' className='m-auto'>
        <div className="login__container d-flex justify-content-between">
          <div className="login__img">
            <img src={registerImg} alt="login" />
          </div>

          <div className="login__form">
            <div className="user">
              <img src={userIcon} alt="user" />
            </div>
            <h2>Register</h2>
            <Form onSubmit={handleClick}>
            <FormGroup>
                <input type="text" id="username" placeholder='Username' required 
                onChange={handleChange}/>
              </FormGroup>
              <FormGroup>
                <input type="email" id="email" placeholder='Email' required 
                onChange={handleChange}/>
              </FormGroup>
              <FormGroup>
                <input type="password" id="password" placeholder='Password' required 
                onChange={handleChange}/>
              </FormGroup>
              <Button className="btn secondary__btn auth__btn"
              type='submit'>Create Account</Button>
            </Form>
            <p>Already have an account ? <Link to='/login'>Login</Link></p>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>
  )
}

export default Register


// import registerImg from '../assets/images/register.png';
// import userIcon from '../assets/images/user.png';

// const Register = () => {
//   const [credentials, setCredentials] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate(); // For navigation after successful registration

//   const handleChange = (e) => {
//     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:8000/api/v1/auth/register', credentials);
//       if (res.data.success) {
//         alert(res.data.message); // Success message from the backend
//         navigate('/login'); // Redirect to login page
//       } else {
//         alert(res.data.message); // Error message from the backend
//       }
//     } catch (error) {
//       console.error('Error during registration:', error.response?.data?.message || error.message);
//       alert(error.response?.data?.message || 'Something went wrong. Please try again.');
//     }
//   };
  
//   return (
//     <section>
//       <Container>
//         <Row>
//           <Col lg="8" className="m-auto">
//             <div className="login__container d-flex justify-content-between">
//               <div className="login__img">
//                 <img src={registerImg} alt="login" />
//               </div>

//               <div className="login__form">
//                 <div className="user">
//                   <img src={userIcon} alt="user" />
//                 </div>
//                 <h2>Register</h2>
//                 <Form onSubmit={handleClick}>
//                   <FormGroup>
//                     <input
//                       type="text"
//                       id="username"
//                       placeholder="Username"
//                       value={credentials.username}
//                       onChange={handleChange}
//                       required
//                     />
//                   </FormGroup>
//                   <FormGroup>
//                     <input
//                       type="email"
//                       id="email"
//                       placeholder="Email"
//                       value={credentials.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </FormGroup>
//                   <FormGroup>
//                     <input
//                       type="password"
//                       id="password"
//                       placeholder="Password"
//                       value={credentials.password}
//                       onChange={handleChange}
//                       required
//                     />
//                   </FormGroup>
//                   <Button className="btn secondary__btn auth__btn" type="submit">
//                     Create Account
//                   </Button>
//                 </Form>
//                 <p>
//                   Already have an account? <Link to="/login">Login</Link>
//                 </p>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Register;
