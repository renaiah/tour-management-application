import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'react-bootstrap'
import weather from '../assets/images/weather.png'
import guide from '../assets/images/guide.png'
import customization from '../assets/images/customization.png'


const servicesData=[
  {
    imgURL:weather,
    title:"Calculate weather",
    desc:"Plan ahead with real-time weather updates for your destination."
  },
  {
    imgURL:guide,
    title:"Best Tour Guide",
    desc:"Connect with the top-rated local guides for an unforgettable journey."
  },
  {
    imgURL:customization,
    title:"Customization",
    desc:"Personalize your tour experience to match your style and preferences."
  }
]
const ServiceList = () => {
  return (
    <>
      {
        servicesData.map((item,index) => (
        <Col lg="3" md="6" sm="12" className='mb-4' key={index}>
          <ServiceCard item={item} />
          </Col>))
      }
    </>
  )
}

export default ServiceList