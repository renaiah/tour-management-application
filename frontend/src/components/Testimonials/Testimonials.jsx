import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import avaImg1 from '../../assets/images/ava-1.jpg'
import avaImg2 from '../../assets/images/ava-2.jpg'
import avaImg3 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
  return (
    <Carousel interval={2000} controls={true} indicators={true} >
        <Carousel.Item>
            <div className="testimonial py-4 px-3">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="d-flex align-items-center gap-4 mt-3">
                            <img src={avaImg1} className='w-25 h-25 rounded-2' alt="Img is not available" />
                            <div>
                            <h5 className="mb-0 mt-3">- John Doe</h5>
                            <p>Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <p className='fs-5'>Our entire trip was beyond our expectations! From personalized itineraries to excellent local guides, 
                            everything was perfectly organized. We felt safe, informed, and had the adventure of a lifetime!</p>
                    </div>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="testimonial py-4 px-3">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="d-flex align-items-center gap-4 mt-3">
                            <img src={avaImg2} className='w-25 h-25 rounded-2' alt="" />
                            <div>
                            <h5 className="mb-0 mt-3">- Sara</h5>
                            <p>Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <p className='fs-5'>This was hands down the best travel experience we've had. The team took care of every detail, 
                            and the destinations they recommended were truly breathtaking. We can't wait to book our next trip with them!</p>
                    </div>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="testimonial py-4 px-3">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="d-flex align-items-center gap-4 mt-3">
                            <img src={avaImg3} className='w-25 h-25 rounded-2' alt="" />
                            <div>
                            <h5 className="mb-0 mt-3">- Calow</h5>
                            <p>Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <p className='fs-5'>The attention to detail was incredible! They customized the tour exactly how we wanted, 
                            and the guide was a local expert who made the journey even more special. Highly recommended!</p>
                    </div>
                </div>
            </div>
        </Carousel.Item>
    </Carousel>
  )
}

export default Testimonials
