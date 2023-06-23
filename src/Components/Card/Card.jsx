import React from 'react'
import Services from '../../Services/Services'
import { Link } from 'react-router-dom';

export default function Card({ item, type }) {
  let services = new Services();
  return (
    <Link to={`/itemdetails/${type}/${item.id}`} className='text-decoration-none'>
      <div className='text-white position-relative main-hover mb-5'>
        <div className="position-absolute top-0 end-0">
          <p className='px-2 py-1 bg-main text-white rounded-pill m-1'>{(item.vote_average / 2).toFixed(1)}</p>
        </div>
        <img src={`${services.imgBase}/${item.poster_path}`} className='w-100 rounded-3' alt="" />
        <h3 className='lead h5 text-center'>{item.title} {item.name}</h3>
      </div>
    </Link>
  )
}
