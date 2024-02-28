import React from 'react';
import './styles.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Welcome to Bluetick Consultants</h1>
                <p>We are a technology-driven firm founded in 2017, specializing in cutting-edge, scalable, privacy-focused Generative AI Solutions.</p>
                <a href="https://www.bluetickconsultants.com/generative-ai.html" className="btn">Learn More</a>
            </div>
            {/* Add your image here */}
        </section>
    );
};

export default HeroSection;
