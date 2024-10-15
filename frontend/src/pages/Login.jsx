import React, { useState,useContext } from 'react';
import './Login.css';
import { Link,useNavigate } from 'react-router-dom';
import { Form, FormGroup, Container, Row, Col } from 'react-bootstrap';
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';
import { AuthanticationContext } from '../context/AuthanticationContext';
import { BASE_URL } from '../utils/config';

function Login() {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  });

  const navigate=useNavigate()

  const {dispatch} = useContext(AuthanticationContext)

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault();

    dispatch({type : 'LOGIN_START'})

    try{
      const res = await fetch(`${BASE_URL}/auth/login`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(credentials)
      })

      const result = await res.json()

      if(!res.ok) alert(result.message)
      
      console.log(result.data)

        dispatch({type: "LOGIN_SUCCESS", payload:result.data})
        navigate("/")
    }
    catch(err){
      dispatch({type: "LOGIN_FAILURE", payload:err.message})
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="Login illustration" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="User icon" />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      className="form-control"
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
                  <button className="btn secondary__btn auth__btn" type="submit">Login</button>
                </Form>
                <p>Don't have an account? <Link to="/register">Create</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Login;



