import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    let location = useLocation();

    const [blurClass, setBlurClass] = useState("");

    function blurNavbar() {
        let windowHeight = window.scrollY;
        // if (location.pathname == '/' || location.pathname == '/movies' || location.pathname == '/tvseries'){
        //     if(windowHeight > 500) setBlurClass('bg-blur');
        //     else setBlurClass('')
        // }
        // else setBlurClass('bg-blur');

        windowHeight > 500 ? setBlurClass("bg-blur") : setBlurClass("");
    }

    useEffect(() => {
        window.addEventListener("scroll", blurNavbar);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark position-fixed w-100 ${blurClass}`}>
            <div className="container">
                <Link className="navbar-brand fw-semibold text-main" to="/">STREAMIFY</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link main-hover ${location.pathname == '/' ? 'active' : ''}`} aria-current='location' to='/'>HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link main-hover ${location.pathname == '/movies' ? 'active' : ''}`} to='/movies'>MOVIES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link main-hover ${location.pathname == '/tvseries' ? 'active' : ''}`} to='/tvseries'>TV SERIES</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
