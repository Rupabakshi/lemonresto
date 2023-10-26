import React from 'react'
import Header from './Header.js';
import Banner from './Banner.js';
import Products from './Products.js';
import Testimonials from './Testimonials.js';
import About from './About.js';
import Footer from './Footer.js';
function Home() {
  return (
    <div>
        <Header />
        <Banner />
        <Products />
        <Testimonials />
        <About />
        <Footer />
    </div>
  )
}

export default Home
