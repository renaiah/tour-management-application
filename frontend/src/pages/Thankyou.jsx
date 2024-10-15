import React from 'react'
import './Thankyou.css'
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Thankyou = () => {
  return (
    <div className="section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 pt-5 text-center">
                    <div className="thank__you">
                        <span><div className="cusIcon"><FaCheckCircle /></div></span>
                        <h1 className="mb-3 fw-semibold">Thank You</h1>
                        <h2 className="mb-4">your tour is booked.</h2>
                        <button className="btn primary__btn w-25"><Link to='/'>Go to home</Link></button>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Thankyou