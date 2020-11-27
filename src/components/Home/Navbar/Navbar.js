import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-lighty fixed-top" >
                <a className="navbar-brand  text-white" href="#">Welcome</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item activeX">
                        <Link className="nav-link mr-4  text-white" to='/'>Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4  text-white" href="/#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4  text-white" href="/#blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4  text-white" href="/#about">About</a>
                        </li>
                    </ul>
                    <a href="https://drive.google.com/file/d/14ge-FvB8kaC38a-KdN6ze7Duet0ECJ0w/view?usp=sharing" target="_blank" rel='noreferrer'>
                    <button type="button" class="btn btn-outline-secondary text-white">Resume</button>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;