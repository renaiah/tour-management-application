import React from 'react'
import './Footer.css'
import { ListGroup } from 'react-bootstrap';
import {ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>Explore the World with Us! <br/>
              Adventure Awaits – Discover Your Next Journey!</p>
              <div className="social__media d-flex align-items-center gap-4">
                <span >
                  <Link to='#'><div className="youtube"><FaYoutube /></div></Link>
                </span>
                <span>
                  <Link to='#'><div className="git"><FaGithub /></div></Link>
                </span>
                <span>
                  <Link to='#'><div className="insta"><FaInstagramSquare /></div></Link>
                </span>
                <span>
                  <Link to='#'><div className="fb"><FaFacebook /></div></Link>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <h5 className="links__title">Quick Links</h5>
            <div className="quick__link">
              <ul className='ps-0 border-0 '>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/tours"}>Tours</Link></li>
                <li><Link to={"/register"}>Register</Link></li>
                <li><Link to={"/tours"}>Search</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <h5 className="links__title">Locations</h5>
            <div className="quick__link">
              <ul className='ps-0 border-0 '>
                <li><a href="">Hyderabad</a></li>
                <li><a href="">Delhi</a></li>
                <li><a href="">Mumbai</a></li>
                <li><a href="">banguloor</a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <h5 className="links__title">Contact Us</h5>
            <ListGroup className="quick__link">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <div className="icon"><FaLocationDot /></div>
                  </span>
                  Address:
                </h6>
                <p className='mb-0'>Dilusukhnagar,Hyderabad</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><div className="icon"><MdEmail /></div>
                  </span>
                  Email:
                </h6>
                <p className='mb-0'>tours@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><div className="icon"><FaPhoneAlt /></div>
                  </span>
                  Phone no:
                </h6>
                <p className='mb-0'>789600765</p>
              </ListGroupItem>
            </ListGroup>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer