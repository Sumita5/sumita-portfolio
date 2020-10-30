import React from 'react';
import profilePic from '../../../images/sumi.jpg';
import './About.css';

const About = () => {
    return (
        <div id='about' className="d-flex flex-column text-center about pt-5" style={{color: 'white'}}>
            <img src={profilePic} alt="" style={{ width: '100px', height: '100px'}} className='mx-auto rounded-circle img-fluid' />
            <p className="lead font-weight-bold">Engineer | Web Developer</p>
            <div>
                <button type="button" class="btn btn-primary m-2">Contact me</button>
                <button type="button" class="btn btn-primary">Resume</button></div>


        </div>






    );
};

export default About;