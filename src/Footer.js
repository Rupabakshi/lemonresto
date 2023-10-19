import React from 'react'
import Logo from './assets/images/Logo .svg';
import { Container } from 'react-bootstrap';
function Footer() {
    return (
        <>
            <footer>
                <Container>
                    <div className='footer-wrap'>
                        <div className='row'>
                            <div className='col-md-6 col-lg-3'>
                                <img src={Logo} alt="logo" />
                            </div>
                            <div className='col-md-6 col-lg-3'>
                                <h6>Doormat navigation</h6>
                                <div><a href="">Menu</a></div>
                                <div><a href="">About</a></div>
                                <div><a href="">Reservations</a></div>
                                <div><a href="">Order Online</a></div>
                                <div><a href="">Login</a></div>
                            </div>
                            <div className='col-md-6 col-lg-3'>
                                <h6>Contact Details</h6>
                                <div><a href="">Address</a></div>
                                <div><a href="">Phone  Number</a></div>
                                <div><a href="">Email</a></div>
                            </div>
                            <div className='col-md-6 col-lg-3'>
                                <h6>Social media Link</h6>
                                <div>
                                    <a href="" className='me-3'>
                                        <i class="bi bi-facebook"></i></a> 
                                    <a href="" className='me-3'>
                                        <i class="bi bi-instagram"></i></a>
                                    <a href="" className='me-3'>
                                    <i class="bi bi-linkedin"></i></a>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer
