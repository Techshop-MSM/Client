import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ImpressumDatenschutz } from '../../public/ImpressumDatenschutz'


export function Footer() {
  return (
    <footer className="py-5 container">
      <div className="row">
        <div className="col-lg-3">
          <img src="https://www.alternate.de/resources/pix/footer/PayPal_logo.svg" alt="" />
        </div>
        <div className="col-lg-3">
          <img
            src="https://www.alternate.de/resources/pix/footer/MC_Visa_Diner_Discover_Kombi_logo_new.svg"
            alt=""
          />
        </div>
        <div className="col-lg-3">
          <img src="https://www.alternate.de/resources/pix/footer/vorkasse_de_logo.svg" alt="" />
        </div>
        <div className="col-lg-3">
          <img
            src="https://www.alternate.de/resources/pix/footer/klarna_logo.svg"
            alt=""
            width="150"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>

<<<<<<< HEAD
            <div className='col-6 col-md-2 mb-3'>
                <h5>Section</h5>
                <ul className='nav flex-column'>
                    <li className='nav-item mb-2'>    <ImpressumDatenschutz/>
</li>
                    <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Features</a></li>
                    <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Pricing</a></li>
                    <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>FAQs</a></li>
                    <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>About</a></li>
                </ul>
            </div>
=======
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>
>>>>>>> dev

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>&copy; 2022 Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}
