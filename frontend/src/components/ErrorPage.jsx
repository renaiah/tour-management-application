import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error=useRouteError()
  return (
    <div className='text-center'>
        <h2 className='text-center fs-5 fw-5'>Opps!</h2>
        <p className='lead text-denger'>{error.statusText}</p>
    </div>
  )
}

export default ErrorPage