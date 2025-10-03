
import React from 'react';
import logo from '../../assets/logo.png';

function Footer() {
  return (
  <footer className="bg-dark text-center py-4 mt-5 w-100" style={{width:'100vw', fontSize:'1.2rem', letterSpacing:'0.5px', background:'#444', border:'2px solid #fff', borderRadius:'14px', boxShadow:'0 -2px 12px rgba(0,0,0,0.08)', marginTop:'60px', paddingBottom:'24px'}}>
      <div className="container-fluid px-4" style={{maxWidth:'100vw'}}>
  <img src={logo} alt="EduCareer Logo" style={{height:'48px', marginBottom:'12px'}} className="d-block mx-auto" />
        <span className="text-light" style={{fontSize:'1.1rem'}}>
          © 2025 EduCareer. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
export default Footer;
