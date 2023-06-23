import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Card/Card';
import Services from '../../Services/Services';

export default function ViewAll() {
  let params = useParams();
  let services = new Services();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    switch (params.category) {
      case 'popular':
        services.getPopular(params.media_type, setList, setLoading);
        break;
      case 'trending':
        services.getTrending(params.media_type, setList, setLoading);
        break;
      case 'top rated':
        services.getTopRated(params.media_type, setList, setLoading);
        break;
    }
  }, []);
  return (
    <div>
      {loading ? <div className='position-fixed w-100 h-100 bg-black d-flex justify-content-center align-items-center'>
        <i i className='fa-spin fa-solid fa-c text-main fa-3x' ></i >
      </div > :
        <section className='py-5'>
          <div class="container">
          <h2 className='text-capitalize'>{params.category} {params.media_type == 'tv' ? `${params.media_type} Serie` : params.media_type}s</h2>            <div className="row g-5">
              {list.map((item, i) =>
                <div class="col-md-3">
                  <Card key={i} item={item} type={params.media_type} />
                </div>
              )}
            </div>
          </div>
        </section>}
    </div>
  )
}
