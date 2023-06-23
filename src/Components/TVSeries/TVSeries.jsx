import React, { useEffect, useState } from 'react'
import Carousel from '../Carousel/Carousel';
import TrendingHeader from '../TrendingHeader/TrendingHeader';
import { Helmet } from 'react-helmet';
export default function TVSeries() {
  return (
    <>
      <Helmet>
        <title>TV Series</title>
      </Helmet>
      <TrendingHeader type={'tv'} />
      <Carousel category={'popular'} type={'tv'} />
      <Carousel category={'trending'} type={'tv'} />
      <Carousel category={'top rated'} type={'tv'} />
    </>
  )
}
