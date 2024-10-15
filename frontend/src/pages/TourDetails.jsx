import React, { useEffect, useState ,useContext} from 'react'
import './TourDetails.css'
import { useRef } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap'
import calculateAvaRating from '../utils/avgRating'
import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { Form } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'
import { MdAddLocationAlt } from "react-icons/md";
import Booking from '../components/Booking/Booking'
import NewsLetter from '../shared/NewsLetter'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import { AuthanticationContext } from '../context/AuthanticationContext'
import avatarImg from '../assets/images/avatar.jpg'

const TourDetails = () => {

  const {id} = useParams()
  const reviewMsgRef = useRef("")
  const [tourRating,setTourRating] = useState(null)
  const {user} = useContext(AuthanticationContext)
  const navigate=useNavigate()

  // fetch tour data from databse

  const{data: tour,loading,error} = useFetch(`${BASE_URL}/tours/${id}`)
  const {photo,title,desc,price,address,reviews,city,distance,maxGroupSize} = tour

  const{totalRating,avgRating} = calculateAvaRating(reviews)
   
  const options = {day:'numeric', month:'long', year:'numeric'}

  // submit request to the server
  const submitHandler = async (e) =>{
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value
    
    
    try{

      if(!user || user===undefined || user===null){
        alert("Please sign in")
        navigate('/login')
      }

      const reviewObj = {
        username:user?.username,
        reviewText,
        rating:tourRating
      }
      console.log(reviewObj)
      const res = await fetch(`${BASE_URL}/review/${id}`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:"include",
        body:JSON.stringify(reviewObj)
      })

      const result = await res.json()
      if(!res.ok){
        return alert(result.message)
      }
      alert(result.message)
    }
    catch(err){
      alert(err.message)
    }
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[tour])

  // Dynamically import the image
  const getImage = (photo) => {
    try {
      return require(`../assets/images/${photo}`);
    } catch (err) {
      console.error(err);
      return null;
    }
  };


  return <>
      <section>

        <Container>
          {loading && <h4 className='text-center pt-5'>Loading............</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
            {
              !loading && !error && <Row>
              <Col lg='8'>
                <div className="tour__content">
                  {photo && <img src={getImage(photo)} alt="img is not available" />}  {/* Dynamically load the image */}
                  <div className="tour__info">
                    <h2>{title}</h2>

                    <div className='d-flex align-items-center gap-5'>
                      <span className="tour__rating d-flex align-items-center gap-2">
                        <div className="icon">
                          <FaStar />
                        </div>
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? "Not rated" : <span>({reviews?.length})</span>}
                      </span>

                      <span className="tour__location d-flex align-items-center gap-2">
                        <div className="icon">
                          <FaMapMarkerAlt />
                        </div>
                      {address}
                      </span>
                    </div>

                    <div className="tour__extra__details">
                      <span><div className="icon"><IoLocation /></div>{city}</span>
                      <span><div className="icon"><FaDollarSign /></div>{price} / person</span>
                      <span><div className="icon"><MdAddLocationAlt /></div>{distance}  km</span>
                      <span><div className="icon"><MdGroups /></div>{maxGroupSize}</span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>

                  </div>
                  {/* tour review start */}
                <div className="tour__reviews mt-4">
                  <h4>Reviwes ({reviews?.length} reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span onClick={()=> setTourRating(1)} className={tourRating === 1 ? 'active' : ''}> 1 <IoIosStar /></span>
                      <span onClick={()=> setTourRating(2)} className={tourRating === 2 ? 'active' : ''}> 2 <IoIosStar /></span>
                      <span onClick={()=> setTourRating(3)} className={tourRating === 3 ? 'active' : ''}> 3 <IoIosStar /></span>
                      <span onClick={()=> setTourRating(4)} className={tourRating === 4 ? 'active' : ''}> 4 <IoIosStar /></span>
                      <span onClick={()=> setTourRating(5)} className={tourRating === 5 ? 'active' : ''}> 5 <IoIosStar /></span>
                    </div>

                    <div className="review__input">
                      <input type="text" ref={reviewMsgRef} placeholder='share your thoughts...' required/>
                      <button className="btn primary__btn text-white" type='submit'>submit</button>
                    </div>
                  </Form>

                  <ListGroup className="user__reviews">
                    {
                      reviews?.map(review => (
                        <div className="review__item">
                          <img src={avatarImg} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.username}</h5>
                                <p>{new Date(review.createdAt).toLocaleDateString("en-US",options)}</p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review.rating} 
                                <div className="icon"><IoIosStar /></div>
                              </span>
                            </div>

                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>
                </div>
                  {/* tour review end */}
                </div>
              </Col>

              <Col lg='4'>
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          }
        </Container>
      </section>
      <NewsLetter />
    </>
  
}

export default TourDetails