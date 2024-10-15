import React from 'react';
import { Link } from 'react-router-dom';
import { RiMapPin2Fill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import './TourCard.css';
import calculateAvaRating from '../utils/avgRating';



const TourCard = ({ tour }) => {

  const { _id, title, photo, featured, city, price, reviews=[] } = tour;

  const{totalRating,avgRating} = calculateAvaRating(reviews)

   // Dynamically import the image
   const getImage = (photo) => {
    try {
      return require(`../assets/images/${photo}`);
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  return (
    <div className='tour__card mb-5'>
      <div className="card">
        <div className="tour__img">
          {photo && <img src={getImage(photo)} alt="img is not available" />}  {/* Dynamically load the image */}
          {featured && <span>Featured</span>}
        </div> 
      </div>
      <div className="card-body mt-2">
        <div className="card__top d-flex align-items-center justify-content-between">
          <span className="tour__location d-flex align-items-center gap-2">
            <div className="icon">
              <RiMapPin2Fill />
            </div>
            {city}
          </span>

          <span className="tour__rating d-flex align-items-center gap-1">
            <div className="icon">
              <FaStar />
            </div>
            {avgRating === 0 ? null : avgRating}
            {totalRating === 0 ? "Not rated" : <span>({reviews.length})</span>}
          </span>
        </div>
        <h5 className="tour__title">
          <Link to={`/tours/${_id}`}>{title}</Link>
        </h5>
        <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
          <h5>${price} <span>/person</span></h5>

          <button className="btn booking__btn">
            <Link to={`/tours/${_id}`}>Book Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
