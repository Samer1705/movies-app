import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Services from '../../Services/Services';
import Carousel from '../Carousel/Carousel';

export default function ItemDetails() {
    let services = new Services();
    let params = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        services.getDetails(params.media_type, setItem, setLoading, params.id);
    }, [])
    useEffect(()=>{
        if(item.id != params.id) services.getDetails(params.media_type, setItem, setLoading, params.id);
    })
    return (
        <section className='p-5 position-relative'>
            {loading? <div className='position-absolute top-0 bottom-0 start-0 end-0 vh-100 bg-black d-flex justify-content-center align-items-center'>
                <i className='fa-spin fa-solid fa-c text-main fa-3x'></i>
            </div> :
                <div className="container text-white row">
                    <div className="col-md-4 d-lg-block d-none">
                        <div>
                            <img src={`${services.imgBase}/${item.poster_path}`} className='w-100' alt={`${item.title} ${item.name}`} />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div>
                            <h2 className='fa-4x'>{item.title} {item.name}</h2>
                            <p className='h5'>Rating: {(item.vote_average / 2).toFixed(1)} <i className='fa-solid fa-star text-warning'></i></p>
                            <p className='lead d-md-block d-none'><span className='h5'>Overview:</span> {item.overview}</p>
                            <p className='h5'>{params.media_type == 'movie' ?`Run Time: ${item.runtime} min.`:`Episode Run Time: ${item.episode_run_time} min.` }</p>
                            <div className="d-flex">
                                <p className='h5'>genres:</p>
                                {item.genres?.map((genre) => <p className='mx-2 bg-main py-1 px-3 rounded-1'>{genre.name}</p>)}
                            </div>
                        </div>
                    </div>
                </div>
            }
            <Carousel category={'related'} type={params.media_type} id={params.id}/>    
        </section>
    )
}
