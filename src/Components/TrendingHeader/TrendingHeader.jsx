import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Services from '../../Services/Services'
import TrendingHeaderItem from '../TrendingHeaderItem/TrendingHeaderItem';
export default function TrendingHeader({ type }) {
    let services = new Services();
    const [trending, setTrending] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        services.getTrending(type, setTrending, setLoading);
    }, [])
    return (
        <div className='position-relative vh-100'>
            {loading ? <div className='position-absolute top-0 bottom-0 start-0 end-0 bg-black d-flex justify-content-center align-items-center'>
                <i className='fa-spin fa-solid fa-c text-main fa-3x'></i>
            </div> :
                <div id="carouselExampleFade" className="carousel slide carousel-fade">
                    <div className="carousel-inner">
                        {trending.slice(0, 5).map((item, i) =>
                            <div className={`carousel-item ${i == 0 ? 'active' : ''}`}>
                                <TrendingHeaderItem key={i} item={item} type={type} />
                            </div>)}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            }
        </div>
    )
}
