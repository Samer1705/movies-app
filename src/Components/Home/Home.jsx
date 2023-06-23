import React, { useEffect, useState } from 'react'
import axios from 'axios';
import watching_tv from '../../Assets/Images/watching_tv.gif'
import Header from '../Header/Header';
import CountUp from 'react-countup';
import { Helmet } from 'react-helmet';

export default function Home() {

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <section className='py-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h2>Enjoy Watching Them on TV.</h2>
                <p className='lead'>Whether it's Smart TV, Xbox, Apply TV, Watch Your Favorite Program with Great Pleasure.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img src={watching_tv} alt="" className='w-100 rounded-3' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section  className='bg-black py-5'>
        <div className='container'>
          <div className="row text-center">
            <div className="col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
              <div>
                <h3 className='text-main h1'><CountUp end={800}></CountUp>+</h3>
                <h3 className='h4'>Total Movies</h3>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
              <div>
                <h3 className='text-main h1'><CountUp end={500}></CountUp>+</h3>
                <h3 className='h4'>Total TV Series</h3>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
              <div>
                <h3 className='text-main h1'><CountUp end={100000}></CountUp>+</h3>
                <h3 className='h4'>Viewers</h3>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
              <div>
                <h3 className='text-main h1'><CountUp end={10}></CountUp>/10</h3>
                <h3 className='h4'>Excitement</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
