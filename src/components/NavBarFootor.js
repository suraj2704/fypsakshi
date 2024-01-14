
import React from 'react';
import MainPage from './MainPage';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    flex: 1,
  },
  footer: {
    flexShrink: 0,

    backgroundColor:'#a6e7ff',
  },
  lastFooter: {
    backgroundColor:'#1560bd ',
    padding: '20px',
    textAlign: 'center',
  },
};

export default function NavBarFooter() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.header} className="Header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About Us
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Help
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        Campus Navigation
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Attendance System
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Classroom Allocation
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ color: 'black' }} />
                <button className="btn btn-outline-success" type="submit" style={{ color: 'black', backgroundColor: 'white' }}>
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      <MainPage/>
      <div style={styles.footer} className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3>Vidyalankar Polytechnic </h3>
              <p>
              Vidyalankar Polytechnic is among top engineering polytechnics of the state offering engineering diploma education to SSC (Std. 10th) students. Vidyalankar Polytechnic is approved by AICTE, New Delhi and Government of Maharashtra. It is affiliated to Maharashtra State Board of Technical Education (MSBTE), Mumbai.
              </p>
              <div className="footer-icons">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-linkedin"></i>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a className="" href="/">
HOME
                  </a>
                </li>
                <li>
                  <a className="" href="/">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="" href="/">
                  Help
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>Quick Links</h5>
<p>      
     <i className="bi bi-telephone"></i> Vidyalankar Polytechnic Vidyalankar College Marg, Wadala (East),
Mumbai - 400037
              </p>
              <p>
                <i className="bi bi-telephone"></i> +91 22 2416 11 26
              </p>
              <p>
                <i className="bi bi-envelope"></i> principal@vpt.edu.in
              </p>
              <p>
                <i className="bi bi-geo-alt"></i> Get Directions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.lastFooter} className="Last-footer">
        <p>Design By Students Of Vidyalankar Polytechnic</p>
        <p>Sakshi | Suraj | Prajwal | Suyash</p>
      </div>
    </div>
  );
}
