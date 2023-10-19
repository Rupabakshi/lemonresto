import React from 'react'
import { Button, Container } from 'react-bootstrap';
import BannerImg from './assets/images/restauranfood.svg';
function Banner() {
    return (
        <div className='banner-wrap'>
            <Container>
                <div className='row'>
                    <div className='col-md-7 pt-4'>
                        <h1>Little Lemon</h1>
                        <p className='f21'>Chicago</p>
                        <p className='subtext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's
                            standard dummy text ever since </p>
                        <Button variant="warning" className='mt-3'>Reserve a Table</Button>
                    </div>
                    <div className='col-md-5'>
                        <img src={BannerImg} className='img-fluid imgRight' alt="banner image" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner
