import React, { useEffect, useState } from 'react'
import Services from '../../Services/Services'
import { Link } from 'react-router-dom';

export default function TrendingHeaderItem({ item, type }) {
    let services = new Services();
    return (
        <div className="image-bg position-relative vh-100">
            <img src={`${services.imgBase}/${item.backdrop_path}`} alt={`${item.title} ${item.name}`} className='w-100 d-lg-block d-none' />
            <img src={`${services.imgBase}/${item.poster_path}`} alt={`${item.title} ${item.name}`} className='w-100 d-lg-none d-block' />
            <div className="layer bg-dark bg-opacity-75 position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                <div className="w-75 text-white row">
                    <div className="col-md-4 d-lg-block d-none">
                        <div>
                            <img src={`${services.imgBase}/${item.poster_path}`} className='w-100 rounded-3' alt={`${item.title} ${item.name}`} />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div>
                            <h2 className='fa-4x'>{item.title} {item.name}</h2>
                            <p>Rating: {(item.vote_average / 2).toFixed(1)} <i className='fa-solid fa-star text-warning'></i></p>
                            <p>Release Date: {item.first_air_date} {item.release_date}</p>
                            <p className='lead fs-6 d-md-block d-none'>{item.overview}</p>
                            <Link to={`/itemdetails/${type}/${item.id}`}><button className='btn btn-main'><i className='fa-solid fa-play mx-1'></i> More Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
