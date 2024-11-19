// src/components/LandingPage/LandingPage.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            {/* Black Section (top half) */}
            <div className="top-section">
                <div className="logo-and-get-started">
                    <div className="logo">GradMemoir</div>
                    <a href='/signup'>
                        <button className="get-started">Get Started</button>
                    </a>
                </div>

                <div className="content-container">
                    {/* Left side: Text */}
                    <div className="text-section">
                        <h1>Create. Share. Relive. Welcome to GradMemoir.</h1>
                        <p>GradMemoir lets you document your most cherished moments, achievements, and experiences from college. Build your digital legacy and share your journey with friends and alumni!</p>
                    </div>

                    {/* Right side: Carousel */}
                    <div className="carousel-section">
                        <Carousel>
                            <div>
                                <img src="/images/img1.jpg" alt="Graduation 1" />
                                <p className="legend"></p>
                            </div>
                            <div>
                                <img src="/images/img2.jpg" alt="Graduation 2" />
                                <p className="legend"></p>
                            </div>
                            <div>
                                <img src="/images/img3.jpg" alt="Graduation 3" />
                                <p className="legend"></p>
                            </div>
                            <div>
                                <img src="/images/img4.jpg" alt="Graduation 4" />
                                <p className="legend"></p>
                            </div>
                            <div>
                                <img src="/images/img5.jpg" alt="Graduation 5" />
                                <p className="legend"></p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>

            {/* Pre-Footer Banner */}
            <div className="pre-footer">
                <p>Capture, Celebrate, and Share Your College Journey on GradMemoir!</p>
                <div className="alumni-story">
                    {/* Additional content can be added here */}
                </div>
            </div>

            {/* White Section (bottom half) */}
            <div className="bottom-section">
                <div className="left-section">
                    <h2 className="bottom-logo">GRADMEMOIR</h2>
                    <h4 className="bottom-desc">Digital yearbook for college memories</h4>
                    <div className="social-media">
                        <a href="https://www.instagram.com/gradmemoir" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <img src="/images/rb_2227.png" alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/gradmemoir" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <img src="/images/150898105_10529405.png" alt="LinkedIn" />
                        </a>
                        <a href="https://www.twitter.com/gradmemoir" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <img src="/images/rb_45424.png" alt="Twitter" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
