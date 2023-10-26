import React from 'react'
import { Button, Container } from 'react-bootstrap';
import ProImg1 from './assets/images/greek salad.jpg';
import ProImg2 from './assets/images/bruchetta.svg';
import ProImg3 from './assets/images/lemon dessert.jpg';
function Products() {
    return (
        <>
            <div className='product-wrap'>
                <Container>
                    <div className='d-flex justify-content-between align-items-center pb-3 flex-wrap'>
                        <div><h2 className='heading'>This weeks Special</h2></div>
                        <div> <Button variant="warning" className='mt-3'>Online Menu</Button></div>
                    </div>
                    <div className='row mb-4 mb-md-4 mb-lg-5'>
                        <div className='col-md-4 mb-3'>
                            <div className='wrapImg'>
                                <img src={ProImg1} className='img-fluid' alt="food" />
                            </div>
                            <div className='bottomWrapPro'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div><h5>Greek Salad</h5></div>
                                    <div className='price'><h5>$12.49</h5></div>
                                </div>
                                <p>THe Femous greek salad of crispy lettuce peppers, olives and our chicago
                                     style teta cheese, 
                                    garnished with  crunchy garlic and rosemary crautons </p>
                                    <a href=''>Order a Delivery</a>
                            </div>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <div className='wrapImg'><img src={ProImg2} alt="food image" className='img-fluid' /></div>
                            <div className='bottomWrapPro'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div><h5>Bruchetta</h5></div>
                                    <div className='price'><h5>$22.49</h5></div>
                                </div>
                                <p>THe Femous greek salad of crispy lettuce peppers, olives and our chicago
                                     style teta cheese, 
                                    garnished with  crunchy garlic and rosemary crautons </p>
                                    <a href="">Order a Delivery</a>
                            </div>
                        </div>
                        <div className='col-md-4 mb-3'>
                        <div className='wrapImg'> <img src={ProImg3} alt="food image" className='img-fluid' /></div>
                        <div className='bottomWrapPro'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div><h5>Lemon Desert</h5></div>
                                    <div className='price'><h5>$32.49</h5></div>
                                </div>
                                <p>THe Femous greek salad of crispy lettuce peppers, olives and our chicago
                                     style teta cheese, 
                                    garnished with  crunchy garlic and rosemary crautons </p>
                                    <a href="#">Order a Delivery</a>
                            </div>
                           
                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default Products
