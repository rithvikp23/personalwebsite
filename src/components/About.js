import React from 'react';

export default function About(){
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-grid">
          <div>
            <p>I am a software developer who enjoys building products that make people's lives easier. My focus is on building fast, accessible, and maintainable front-end applications. I like working with React, TypeScript, and modern CSS.</p>
            <p>Outside of work I enjoy photography, hiking, and contributing to open-source.</p>
          </div>
          <div>
            <div className="card">
              <h3>Skills</h3>
              <ul>
                <li>React & Hooks</li>
                <li>JavaScript / TypeScript</li>
                <li>CSS / Responsive Design</li>
                <li>Node.js & APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
