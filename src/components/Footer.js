import React from 'react';

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}>
          <div className="muted">© {new Date().getFullYear()} Rithvik Pennepalli</div>
          <div style={{display:'flex',gap:12}}>
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
