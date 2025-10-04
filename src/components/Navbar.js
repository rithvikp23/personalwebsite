import React, { useState } from 'react';

export default function Navbar(){
  const [open, setOpen] = useState(false);
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="container nav-inner">
        <div className="brand">Rithvik Pennepalli</div>
      </div>

      {/* Fixed hamburger toggle in top-right */}
      <button
        className={`nav-toggle ${open ? 'open' : ''}`}
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={()=>setOpen(o=>!o)}
      >
        <span className="hamburger">
          <span />
          <span />
          <span />
        </span>
      </button>

      <div className={`nav-popup ${open ? 'open' : ''}`} role="menu" aria-hidden={!open} onClick={()=>setOpen(false)}>
        <a role="menuitem" href="#about">About</a>
        <a role="menuitem" href="#projects">Projects</a>
        <a role="menuitem" href="#contact">Contact</a>
      </div>
    </nav>
  )
}
