import React, { useState, useContext } from 'react';
import './Booking.css';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { Form } from 'react-router-dom';
import { FormGroup } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { BASE_URL } from '../../utils/config';
import {AuthanticationContext} from '../../context/AuthanticationContext'


const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour;

  const navigate = useNavigate();

  const { user } = useContext(AuthanticationContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: '',
    phone: '',
    guestSize: 1,
    bookAt: '',
  });

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(booking)
    
    if (!user) {
      alert('Please sign in to book a tour');
      navigate('/login');
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/booking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(booking),
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }

      navigate('/thank-you');
    } catch (err) {
      console.error('Error:', err);
      alert(err.message);
    }
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center gap-2">
          <FaStar />
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      <div className="booking__form">
        <h5>Booking Information</h5>
        <Form className="booking__info__form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              value={booking.fullName}
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone Number"
              id="phone"
              value={booking.phone}
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder="Booking Date"
              id="bookAt"
              value={booking.bookAt}
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest Size"
              id="guestSize"
              value={booking.guestSize}
              required
              onChange={handleChange}
            />
          </FormGroup>

          <div className="booking__bottom mt-1">
            <ListGroup>
              <ListGroupItem className="border-0 px-0 custom">
                <h5>
                  ${price} x {booking.guestSize} person(s)
                </h5>
                <span>${price * booking.guestSize}</span>
              </ListGroupItem>
              <ListGroupItem className="border-0 px-0 custom">
                <h5>Service Fee</h5>
                <span>${serviceFee}</span>
              </ListGroupItem>
              <ListGroupItem className="border-0 px-0 total">
                <h5>Total</h5>
                <span>${totalAmount}</span>
              </ListGroupItem>
            </ListGroup>
            <button className="btn primary__btn w-100 mt-4" type="submit">
              Book Now
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Booking;

