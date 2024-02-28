import React from 'react';
import './styles.css';

const BlogsSection = () => {
    return (
        <section className="blogs-section">
            <div className="blogs-content">
                <h2>Explore and enjoy the blogs written by our passionate techies</h2>
                <ul>
                    <li>Speaking SQL: Turning Natural Language into Database Dialogues</li>
                    <li>Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback</li>
                    <li>The Fine Art of Tuning: Parameter-Efficient Fine-Tuning</li>
                    <li>PrivAIcy Matters: Balancing Privacy, Price, and Performance</li>
                </ul>
            </div>
        </section>
    );
};

export default BlogsSection;
