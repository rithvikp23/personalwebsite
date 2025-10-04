import React from 'react';

export default function Contact(){
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="card" style={{maxWidth:720}}>
          <p>If you'd like to work together or just say hi, email me at <strong>you@example.com</strong> or reach out on <a href="#">LinkedIn</a>.</p>
          <form style={{display:'grid',gap:8,marginTop:12}} onSubmit={(e)=>{ e.preventDefault(); alert('Thanks — this is a demo form. Replace with a backend or service.'); }}>
            <input name="name" placeholder="Your name" aria-label="Your name" style={{padding:10,borderRadius:8,border:'1px solid #e6edf3'}} />
            <input name="email" placeholder="you@example.com" style={{padding:10,borderRadius:8,border:'1px solid #e6edf3'}} />
            <textarea name="message" placeholder="Message" style={{padding:10,borderRadius:8,border:'1px solid #e6edf3'}} rows={4} />
            <div style={{display:'flex',justifyContent:'flex-end'}}>
              <button className="btn btn-primary" type="submit">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
