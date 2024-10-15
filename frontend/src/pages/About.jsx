import React from 'react'
import './Home.css'
import Subtitle from '../shared/Subtitle'
import ServiceList from '../services/ServiceList'
import Testimonials from '../components/Testimonials/Testimonials'
import  NewsLetter  from '../shared/NewsLetter'
import { MasonryGalleryImgs } from '../components/galleryImages/MasonryGalleryImgs'

import experienceImg from '../assets/images/experience.png'
function About() {
  return (
    <>

      {/* ======================experience  section start ========== */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="experience__content">
                <Subtitle subtitle={'Experience'} />
                <h2>With our all experience <br /> we will serve you</h2>
                <p>With a passion for exploration and a commitment to excellence, we’ve crafted unforgettable travel experiences for our clients. 
                  Our team goes above and beyond to ensure that every journey is filled with discovery, comfort, and joy, creating memories that last a lifetime.</p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>5k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>18</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-6 experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* ======================experience section end ========== */}

      {/* =================== hero section started =============== */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </div>
            <ServiceList />
          </div>
        </div>
      </section>

      {/* gallery section start */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Subtitle subtitle={'Gallery'} />
              <h2 className="gallery__title">Visit our customers tour gallery</h2>
            </div>
            <div className="col-lg-12 mt-3">
              <MasonryGalleryImgs />
            </div>
          </div>
        </div>
      </section>
      {/* gallery section end */}

      {/* testimonial section start */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Subtitle subtitle={'fans Love'} />
              <h2 className="tstimonial__title">What our fans say about us</h2>
            </div>
            <div className="col-lg-12">
              <Testimonials />
            </div>
          </div>
        </div>
      </section>
      {/* testimonial section end */}

      <NewsLetter />
    </>

  )
}

export default About