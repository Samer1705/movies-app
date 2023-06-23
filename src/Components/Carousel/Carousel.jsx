import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import Services from '../../Services/Services';
import { Link } from 'react-router-dom';

export default function Carousel({ category, type, id }) {
    let services = new Services();
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        switch (category) {
            case 'popular':
                services.getPopular(type, setList, setLoading);
                break;
            case 'trending':
                services.getTrending(type, setList, setLoading);
                break;
            case 'top rated':
                services.getTopRated(type, setList, setLoading);
                break;
            case 'related':
                services.getRelated(type, setList, setLoading, id);
                break;
        }
    }, [])
    return (
        <section className='py-3 position-relative'>
            <div className='container'>
                <div className="d-flex justify-content-between py-4">
                    <h2 className='text-capitalize'>{category} {type == 'tv' ? `${type} Serie` : type}s</h2>
                    {category != "related" ? <Link to={`/viewall/${type}/${category}`}><button className='btn btn-outline-main '>View All</button></Link> : ''}
                </div>
                {loading ? <div className='position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center'>
                    <i className='fa-spin fa-solid fa-c text-main fa-3x'></i>
                </div> :
                    <div>
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={20}
                            pagination={{
                                clickable: true,
                            }}
                            freeMode={true}
                            breakpoints={{
                                480: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            {list.slice(0, 10).map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Card key={index} item={item} type={type} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>}
            </div>
        </section>
    )
}
