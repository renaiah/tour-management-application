import React, { useState,useContext } from 'react';
import './Login.css';
import { Link,useNavigate } from 'react-router-dom';
import { Form, FormGroup, Container, Row, Col } from 'react-bootstrap';
import regImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import { AuthanticationContext } from '../context/AuthanticationContext';
import { BASE_URL } from '../utils/config';

function Register() {
  const [credentials, setCredentials] = useState({
    userName:'',
    email: '',
    password: ''
  });

  const navigate=useNavigate()

  const {dispatch} = useContext(AuthanticationContext)

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault();
    
    console.log(credentials)
    try{
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(credentials)
      })

      const result = await res.json()

      if(!res.ok) alert(result.message)

        dispatch({type: "REGISTER_SUCCESS"})
        navigate("/login")
    }
    catch(err){
      alert(err.message)
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={regImg} alt="Login illustration" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="User icon" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      id="username"
                      className="form-control"
                      required
                      onChange={handleChange}
                      // value={credentials.email}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      className="form-control mt-3"
                      required
                      onChange={handleChange}
                      // value={credentials.email}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      className="form-control mt-3"
                      required
                      onChange={handleChange}
                      // value={credentials.password}
                    />
                  </FormGroup>
                  <button className="btn secondary__btn auth__btn" type="submit">Create</button>
                </Form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Register;






