import React from 'react'
import {Container,Row,Col,} from 'react-bootstrap'
import './Home.css'
import Subtitle from '../shared/Subtitle'
import herovideo from '../assets/images/hero-video.mp4'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedToursList from '../components/Featured-tours/FeaturedToursList'
import Testimonials from '../components/Testimonials/Testimonials'
import  NewsLetter  from '../shared/NewsLetter'
import { MasonryGalleryImgs } from '../components/galleryImages/MasonryGalleryImgs'
import heroImg1 from '../assets/images/hero-img01.jpg'
import heroImg2 from '../assets/images/hero-img02.jpg'
import world from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
function Home() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know before You Go'}/>
                  <img src={world} alt="" />
                </div>
                <h1>Travelling opens the door to creating <span className='highlight'>memories</span></h1>
                <p>Traveling offers the 
                  chance to create lasting memories and explore new cultures. Be ready for your adventure with 
                  essential tips and destination guides, ensuring every journey is smooth and unforgettable.</p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg1} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box hero__video-box mt-4">
                <video src={herovideo} alt="video not available" autoPlay loop muted  controls/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg2} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>

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

      {/* ======================featured tour section start ========== */}
      <section>
        <div className="container">
          <Row>
            <Col lg='12' className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedToursList />
          </Row>
        </div>
      </section>
      {/* ======================featured tour section end ========== */}
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

export default Home