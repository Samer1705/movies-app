import React from 'react'

export default function Footer() {
  return (
    <footer className='py-3'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className='d-flex list-unstyled'>
              <li>
                <a href="" className='text-decoration-none main-hover text-light me-3'>Terms Of Us</a>
              </li>
              <li>
                <a href="" className='text-decoration-none main-hover text-light me-3'>Privacy-Policy</a>
              </li>
              <li>
                <a href="" className='text-decoration-none main-hover text-light me-3'>FAQ</a>
              </li>
              <li>
                <a href="" className='text-decoration-none main-hover text-light me-3'>Watch List</a>
              </li>
            </ul>
            <p className='fs-small'>© 2021 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <h5>Follow Us:</h5>
            <i className='fa-brands fa-facebook main-hover me-4 fs-5'></i>
            <i className='fa-brands fa-twitter main-hover me-4 fs-5'></i>
            <i className='fa-brands fa-google main-hover me-4 fs-5'></i>
            <i className='fa-brands fa-github main-hover me-4 fs-5'></i>
          </div>
        </div>
      </div>
    </footer>
  )
}
