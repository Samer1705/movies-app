import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='position-relative vh-100'>
            <div className="layer vh-100 bg-dark bg-opacity-75 position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                <div className="content text-center">
                    <h1 className='text-main'>STREAMIFY</h1>
                    <h2 className='h1'>Endless movies, TV <br /> shows, and more.</h2>
                    <Link to={'/movies'}><button className='btn btn-main mx-2'>Movies</button></Link>
                    <Link to={'/tvseries'}><button className='btn btn-dark mx-2'>TV Series</button></Link>
                </div>
            </div>
        </header>
    )
}
