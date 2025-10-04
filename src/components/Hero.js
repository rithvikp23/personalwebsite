import React from 'react';

export default function Hero(){
  return (
    <section className="hero">
      <div className="container">
  <h1>Hi, I'm Rithvik Pennepalli.</h1>
        <p className="lead">I build delightful web experiences. I'm a software engineer focused on front-end, performance, and accessible design. I currently work on open-source projects and freelance.</p>
        <div className="btn-row">
          <a href="#projects" className="btn btn-primary">See my work</a>
          <a href="#contact" className="btn btn-outline">Get in touch</a>
        </div>
      </div>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{width:300}}>
          <div className="card">
            <img src="/logo192.png" alt="avatar" style={{width:80,height:80,borderRadius:12}} />
            <h3 style={{marginTop:12}}>Quick facts</h3>
            <p className="muted" style={{margin:0}}>Based in City, Country • Open to opportunities</p>
          </div>
        </div>
      </div>
    </section>
  )
}
