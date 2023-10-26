import React from 'react'
const LinkHome =() =>{
  window.location.href = '/'
}
function ConfirmedBooking() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center h-100 flex-column'>
      <h2 className='text-center'>The Booking has been confirmed.</h2>
      <button type='submit' className='btn btn-primary mt-4' onClick={LinkHome}>Go to Home</button>
    </div>
    </>
  )
}

export default ConfirmedBooking
