import React from 'react'
import './NewsLetter.css'
import maleGuideImg from '../assets/images/male-tourist.png'
const NewsLetter = () => {
  return (
    <div className="newsletter">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="newsletter__content">
                        <h2>Subscribe now to get useful travelling information.</h2>

                        <div className="newsletter__input mb-4">
                            <input type="email" placeholder='Enter your email' />
                            <button className="btn newsletter__btn">Subscribe</button>
                        </div>

                        <p>Join our community of travelers and receive the latest travel tips, 
                            destination guides, and exclusive offers straight to your inbox. 
                            Stay informed and inspired for your next adventure!</p>

                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="newsletter__img">
                        <img src={maleGuideImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default NewsLetter
