import React from 'react'
import { Container } from 'react-bootstrap'
import TestiImg1 from './assets/images/testi-1.jpg';
import TestiImg2 from './assets/images/testi-2.jpg';
import TestiImg3 from './assets/images/testi-1.jpg';
function Testimonials() {
    return (
        <>
            <div className='testimonial-wrap'>
                <Container>
                    <h2 className='heading text-center text-white mb-4'>Testimonials</h2>
                    <div className='row'>
                        <div className='col-md-4 mb-3'>
                            <div className='testimonial-wrap-single'>
                                <div className='d-flex justify-content-center align-items-top flex-column'>
                                    <div className='d-flex justify-content-center'><img alt="client image" src={TestiImg1} className='mb-3 text-center' /></div>
                                    <p className='text-white text-center mb-0'>Aarush Mate</p>
                                    <div className='text-center star mb-3'>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                    </div>
                                    <p className='text-center'>“Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text.
                                     It's not Latin, though it looks like it,
                                     and it actually says nothing, Before & After magazine answered a curious reader” </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <div className='testimonial-wrap-single'>
                                <div className='d-flex justify-content-center align-items-top flex-column'>
                                    <div className='d-flex justify-content-center'><img alt="client image" src={TestiImg2} className='mb-3 text-center' /></div>
                                    <p className='text-white text-center mb-0'>Aarush Mate</p>
                                    <div className='text-center star mb-3'>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                    </div>
                                    <p className='text-center'>“Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text.
                                     It's not Latin, though it looks like it,
                                     and it actually says nothing, Before & After magazine answered a curious reader” </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className='testimonial-wrap-single'>
                                <div className='d-flex justify-content-center align-items-top flex-column'>
                                    <div className='d-flex justify-content-center'><img alt="client image" src={TestiImg3} className='mb-3 text-center' /></div>
                                    <p className='text-white text-center mb-0'>Aarush Mate</p>
                                    <div className='text-center star mb-3'>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                    </div>
                                    <p className='text-center'>“Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text.
                                     It's not Latin, though it looks like it,
                                     and it actually says nothing, Before & After magazine answered a curious reader” </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Testimonials
