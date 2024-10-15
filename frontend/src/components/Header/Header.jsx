import React ,{useEffect,useContext, useRef} from 'react'
import {Container,Row} from "react-bootstrap"
import { NavLink,Link,useNavigate } from 'react-router-dom'
import './Header.css'
import {AuthanticationContext} from '../../context/AuthanticationContext'
import logo from '../../assets/images/logo.png';
import { IoMdMenu } from "react-icons/io";

const nav__links = [
  {path:'/',
    display:"Home"
  },
  {path:'/about',
    display:"About"
  },
  {path:'/tours',
    display:"Tours"
  },
]

const Header = () => {
    const headerRef = useRef(null)
    const menuRef = useRef(null)
    const navigate=useNavigate()
    const {user, dispatch} = useContext(AuthanticationContext)

    const logout =()=>{
      dispatch({type:'LOGOUT'})
      navigate("/")
    }

    const stickyHeaderFunc = () => {
      window.addEventListener("scroll", () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add("sticky__header")
        }
        else{
            headerRef.current.classList.remove("sticky__header")
        }
      })
    }

useEffect(() => {
  stickyHeaderFunc()

  return window.removeEventListener("scroll", stickyHeaderFunc)
})

const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* Logo start */}
            <div className="logo">
              <img src={logo} alt="logo not available" />
            </div>
            {/* logo end */}

            {/* menu start */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {
                  nav__links.map((item,index) => (
                    <li className="nav__item" key={index}>
                      <NavLink 
                        to={item.path} className={navClass =>
                        navClass.isActive ? "active__link" : ""}>
                        {item.display}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/* menu end */}
            
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">

                {
                  user? ( <>
                  <h5 className="mb-0">{user.username}</h5>
                  <button className="btn btn-dark" onClick={logout}>Logout</button>
                  </> ) : 
                  ( <>
                    <button className="btn secondary__btn">
                      <Link to="/login">Login</Link>
                    </button>
                    <button className="btn primary__btn">
                      <Link to="/register">Register</Link>
                    </button>
                  </>)
                }
                
              </div>

              <span className="mobile__menu" onClick={toggleMenu}>
                <span><IoMdMenu /></span>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header


