import React from 'react';
import logo from '../../assets/logo.png';

function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100" style={{minHeight:'80px', fontSize:'1.3rem', width:'100vw', padding:'0', background:'#444', left:0, right:0, position:'relative', border:'2px solid #fff', borderRadius:'14px', boxShadow:'0 2px 12px rgba(0,0,0,0.08)'}}>
    <div className="container-fluid px-4" style={{width:'100vw', paddingLeft:'32px', paddingRight:'32px'}}>
        <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#" style={{fontSize:'1.5rem', letterSpacing:'1px'}}>
          <img src={logo} alt="Logo" style={{height:'32px'}} />
          EduCareer
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{gap:'1.2rem'}}>
            <li className="nav-item"><a className="nav-link" href="/" style={{fontSize:'1rem'}}>
              <i className="fa fa-university me-1"></i> Ngành/Trường
            </a></li>
            <li className="nav-item"><a className="nav-link" href="/kynang" style={{fontSize:'1rem'}}>
              <i className="fa fa-lightbulb me-1"></i> Kỹ năng
            </a></li>
            <li className="nav-item"><a className="nav-link" href="/nghe" style={{fontSize:'1rem'}}>
              <i className="fa fa-briefcase me-1"></i> Nghề nghiệp
            </a></li>
            <li className="nav-item"><a className="nav-link" href="/thongke" style={{fontSize:'1rem'}}>
              <i className="fa fa-bar-chart me-1"></i> Thống kê
            </a></li>
            <li className="nav-item"><a className="nav-link" href="/sparql" style={{fontSize:'1rem'}}>
              <i className="fa fa-search me-1"></i> SPARQL
            </a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
