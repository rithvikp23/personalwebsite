import React from 'react';

const sampleProjects = [
  { title: 'Project One', desc: 'A short description of project one. Link to repo or live demo.' },
  { title: 'Project Two', desc: 'A short description of project two. Built with React and APIs.' },
  { title: 'Project Three', desc: 'A short description of project three. Focused on performance.' },
]

export default function Projects(){
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {sampleProjects.map((p,idx)=> (
            <article key={idx} className="card">
              <h3>{p.title}</h3>
              <p className="muted">{p.desc}</p>
              <div style={{marginTop:12}}>
                <a className="btn btn-outline" href="#">View</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
