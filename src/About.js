import React from 'react'
import About1 from './assets/images/about1.svg';
import About2 from './assets/images/about2.svg';
import { Container } from 'react-bootstrap';
function About() {
    return (
        <>
            <Container>
                <div className='row pt-4 pb-4 pt-lg-5 pb-lg-5 about-wrap'>
                    <div className='col-md-6'>
                        <h2 className='heading'>Little Lemon</h2>
                        <p className='sub-heading'>Chicago</p>
                        <p className='text'>It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout. The point of using Lorem Ipsum
                            is that it has a more-or-less normal distribution of letters, as opposed
                            to using 'Content here,
                            content here', making it look like readable English.</p>
                    </div>
                    <div className='col-md-6'>
                        <div className='d-flex'>
                            <img src={About2} className='img-fluid img1' alt="about image" />
                            <img src={About1} className='img-fluid img2' alt="restaurant image" />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default About
