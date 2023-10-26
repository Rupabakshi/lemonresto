import React, { useState } from 'react';
import Header from './Header.js';
import { Container } from 'react-bootstrap';
import ConfirmedBooking from './ConfirmedBooking.js';
import { useFormik } from "formik";
import { signUpSchema } from './schemas';
const initialValues = {
  name: "",
  resdate: "",
  restime: "",
  guests: "",
  occasion: ""
};
function BookingForm() {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
        const res = fetch(
        'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js',
        {
          method: 'POST',
          body: values,
        } ,
        );
       console.log(Response);
      window.location.href = '/confirmbooking';
    }
  });
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    let month = (now.getMonth() + 1).toString().padStart(2, "0");
    let day = now.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <Header />
      <div className='banner-wrap'>
        <Container>
          <h2 className='text-center pt-4 pb-4 text-white'> Book a Table</h2>
        </Container>
      </div>
      <Container className='mt-4 col-12 col-md-10 col-xl-6 mb-4'>
        <form onSubmit={handleSubmit}>
          <div className='form-group mb-3'>
            <label htmlFor="name">Name</label>
            <input className='form-control'
              type="text"
              name="name"
              id="name"
              placeholder='Name'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? <p className='text-danger'>{errors.name}</p> : null}
          </div>
          <div className='mb-3'>
            <label htmlFor="resdate">Choose date</label>
            <input className='form-control' type="date" id="resdate" name="resdate" value={values.resdate} min={getCurrentDate()} onChange={handleChange} onBlur={handleBlur} />

            {errors.resdate && touched.resdate ? <p className='text-danger'>{errors.resdate}</p> : null}
          </div>

          <div className='mb-3'>
            <label htmlFor="restime">Choose time</label>
            <select name="restime" value={values.restime} onChange={handleChange}
              onBlur={handleBlur} className='form-control  form-select'>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
            {errors.restime && touched.restime ? <p className='text-danger'>{errors.restime}</p> : null}
          </div>
          <div className='mb-3'>
            <label htmlFor="guests">Number of guests</label>
            <input className='form-control' type="number" value={values.guests} onChange={handleChange}
              onBlur={handleBlur} placeholder="1" id="guests" name="guests" />
            {errors.guests && touched.guests ? <p className='text-danger'>{errors.guests}</p> : null}
          </div>
          <div className='mb-3'>
            <label htmlFor="occasion">Occasion</label>
            <select className='form-control' id="occasion" value={values.occasion} name="occasion" onChange={handleChange} onBlur={handleBlur}>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            {errors.occasion && touched.occasion ? <p className='text-danger'>{errors.occasion}</p> : null}
          </div>
          <div className='mb-3 text-center'>
            <button type='submit' className='btn btn-primary'>Make Your reservation</button>
          </div>
        </form>
      </Container>
    </>
  )
}

export default BookingForm