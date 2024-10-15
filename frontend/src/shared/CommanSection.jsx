import React from 'react'
import './CommanSection.css'
const CommanSection = ({title}) => {
  return (
    <section className="comman__section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CommanSection