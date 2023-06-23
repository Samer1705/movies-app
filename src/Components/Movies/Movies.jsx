import React, { useEffect, useState } from 'react'
import Carousel from '../Carousel/Carousel';
import TrendingHeader from '../TrendingHeader/TrendingHeader';
import { Helmet } from 'react-helmet';
export default function Movies() {
  return (
    <>
      <Helmet>
        <title>Movies</title>
      </Helmet>
      <TrendingHeader type={'movie'} />
      <Carousel category={'popular'} type={'movie'} />
      <Carousel category={'trending'} type={'movie'} />
      <Carousel category={'top rated'} type={'movie'} />
    </>
  )
}
