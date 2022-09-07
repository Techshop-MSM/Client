import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function TestNav() {
  return (
<>
<div class="menu-container">
  <div class="menu">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="http://marioloncarek.com">About</a>
        <ul>
          <li><a href="#">School</a>
            <ul>
              <li><a href="#">Lidership</a></li>
              <li><a href="#">History</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </li>
          <li><a href="#">Study</a>
            <ul>
              <li><a href="#">Undergraduate</a></li>
              <li><a href="#">Masters</a></li>
              <li><a href="#">International</a></li>
              <li><a href="#">Online</a></li>
            </ul>
          </li>
          <li><a href="#">Research</a>
            <ul>
              <li><a href="#">Undergraduate research</a></li>
              <li><a href="#">Masters research</a></li>
              <li><a href="#">Funding</a></li>
            </ul>
          </li>
          <li><a href="#">Something</a>
            <ul>
              <li><a href="#">Sub something</a></li>
              <li><a href="#">Sub something</a></li>
              <li><a href="#">Sub something</a></li>
              <li><a href="#">Sub something</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a href="#">News</a>
        <ul>
          <li><a href="#">Today</a></li>
          <li><a href="#">Calendar</a></li>
          <li><a href="#">Sport</a></li>
        </ul>
      </li>
      <li><a href="http://marioloncarek.com">Contact</a>
        <ul>
          <li><a href="#">School</a>
            <ul>
              <li><a href="#">Lidership</a></li>
              <li><a href="#">History</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </li>
          <li><a href="#">Study</a>
            <ul>
              <li><a href="#">Undergraduate</a></li>
              <li><a href="#">Masters</a></li>
              <li><a href="#">International</a></li>
              <li><a href="#">Online</a></li>
            </ul>
          </li>
          <li><a href="#">Study</a>
            <ul>
              <li><a href="#">Undergraduate</a></li>
              <li><a href="#">Masters</a></li>
              <li><a href="#">International</a></li>
              <li><a href="#">Online</a></li>
            </ul>
          </li>
          <li><a href="#">Empty sub</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<div class="description">
  <h4><a href="https://github.com/marioloncarek/megamenu-js" target="_blank">Star and fork on github</a></h4>
  <iframe src="https://ghbtns.com/github-btn.html?user=marioloncarek&repo=megamenu-js&type=star&count=true" frameborder="0" scrolling="0" width="100px" height="20px"></iframe>
  <iframe src="https://ghbtns.com/github-btn.html?user=marioloncarek&repo=megamenu-js&type=fork&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
  <h3>megamenu.js - Last responsive megamenu you'll ever need</h3>
  <h5>Features:</h5>
  <ul>
    <li>IE8 Compatible (jquery animated)</li>
    <li>No classes! (for dropdowns)</li>
    <li>Smart - knows when to show megamenu</li>
    <li>100% responsive</li>
    <li>Seamless wordpress integration</li>
    <li>Open source!</li>
  </ul>
</div>
</>
  );
}



