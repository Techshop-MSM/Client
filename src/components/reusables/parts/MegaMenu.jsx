import Navbar from 'react-bootstrap/Navbar'

export function MegaMenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main_nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              {' '}
              <a className="nav-link" href="#">
                Home{' '}
              </a>{' '}
            </li>
            <li className="nav-item active">
              {' '}
              <a className="nav-link" href="#">
                Home{' '}
              </a>{' '}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {' '}
                About{' '}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {' '}
                Services{' '}
              </a>
            </li>
            <li className="nav-item dropdown has-megamenu">
              <div
                className="nav-link dropdown-toggle testhover"
                href="#"
                data-bs-toggle="dropdown"
              >
                {' '}
                Mega menu
                <div className="dropdown-menu megamenu" role="menu">
                  <div className="row g-3">
                    <div className="col-lg-3 col-6">
                      <div className="col-megamenu">
                        <h6 className="title">Title Menu One</h6>
                        <ul className="list-unstyled">
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>{' '}
              </div>
            </li>
            <li className="nav-item dropdown has-megamenu">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                {' '}
                2. Mega{' '}
              </a>
              <div className="dropdown-menu megamenu" role="menu">
                <div className="row g-3">
                  <div className="col-lg-3 col-6">
                    <div className="col-megamenu">
                      <h6 className="title">Mega eins</h6>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">Testmenu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="col-megamenu">
                      <h6 className="title">Title Menu Two</h6>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#comparingModal"
            >
              Vergleichsmodal-Platzhalter
            </button>
            <li className="nav-item dropdown">
              <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">
                {' '}
                Kundeninformationen{' '}
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    {' '}
                    Datenschutz
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {' '}
                    Impressum{' '}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
