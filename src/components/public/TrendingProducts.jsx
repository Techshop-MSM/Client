import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function TrendingProducts() {
  return (
        <div className='container'>
            <div className='row'>
                <h2>Trending Products</h2>
                <hr/>
                <div className='col-lg-3' style={{minHeight: '600px'}}>
                    <div className='cardcontainer'>
                        <div className='photo'>
                            <img src='https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg' className='img-fluid'></img>
                            <div className='preview-badge'>Eins</div>
                        </div>
                        <div className='content'>
                            <p className='txt4'>ASUS AB/C Mainboard</p>
                            <p className='txt5'>Ein Monster im Schafspelz</p>
                            <p className='txt2'>Dieses Mainboard vereint Design gepart mit Roher Leistung welche vor allem in der Gamerzene immerwieder für Topleistungen führt.</p>
                        </div>
                        <div className='footer'>
                            <ul style={{listStyleType: 'none'}}>
                                <li>Hersteller: ASUS</li>
                                <li>Sockel: 1234</li>
                                <li>Arbeitsspeicher; DDR4 2666 - 6000 MH</li>
                                <li>Formfaktor: ATX</li>
                                <li>Hersteller: ASUS</li>
                                <li>Sockel: 1234</li>
                                <li>Arbeitsspeicher; DDR4 2666 - 6000 MH</li>
                                <li>Formfaktor: ATX</li>
                            </ul>
                            <button type='button' className='btn btn-secondary btn-sm'>Details</button>
                            <button type='button' className='btn btn-primary btn-sm'>In den Warenkorb</button>
                            <button type='button' className='btn btn-secondary btn-sm'>Zum Vergleich hinzufügen</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3' style={{minHeight: '600px'}}>
                    <div className='cardcontainer'>
                        <div className='photo'>
                        <img src='https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg' className='img-fluid'></img>
                            <div className='preview-badge'>Zwei</div>
                        </div>class
                        <div className='content'>
                            <p className='txt4'>ASUS AB/C Mainboard</p>
                            <p className='txt5'>Ein Monster im Schafspelz</p>
                            <p className='txt2'>Dieses Mainboard vereint Design gepart mit Roher Leistung welche vor allem in der Gamerzene immerwieder für Topleistungen führt.</p>
                        </div>
                        <div className='footer'>
                            <ul>
                                <li>Hersteller: ASUS</li>
                                <li>Sockel: 1234</li>
                                <li>Arbeitsspeicher; DDR4 2666 - 6000 MH</li>
                                <li>Formfaktor: ATX</li>
                            </ul>
                            <button type='button' className='btn btn-secondary btn-sm'>Details</button>
                            <button type='button' className='btn btn-primary btn-sm'>In den Warenkorb</button>
                            <button type='button' className='btn btn-secondary btn-sm'>Zum Vergleich hinzufügen</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3' style={{minHeight: '600px'}}>
                    <div className='cardcontainer'>
                        <div className='photo'>
                        <img src='https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg' className='img-fluid'></img>
                            <div className='preview-badge'>Drei</div>
                        </div>
                        <div className='content'>
                            <p className='txt4'>ASUS AB/C Mainboard</p>
                            <p className='txt5'>Ein Monster im Schafspelz</p>
                            <p className='txt2'>Dieses Mainboard vereint Design gepart mit Roher Leistung welche vor allem in der Gamerzene immerwieder für Topleistungen führt.</p>
                        </div>
                        <div className='footer'>
                            <ul>
                                <li>Hersteller: ASUS</li>
                                <li>Sockel: 1234</li>
                                <li>Arbeitsspeicher; DDR4 2666 - 6000 MH</li>
                                <li>Formfaktor: ATX</li>
                            </ul>
                            <button type='button' className='btn btn-secondary btn-sm'>Details</button>
                            <button type='button' className='btn btn-primary btn-sm'>In den Warenkorb</button>
                            <button type='button' className='btn btn-secondary btn-sm'>Zum Vergleich hinzufügen</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3' style={{minHeight: '600px'}}>
                    <div className='cardcontainer'>
                        <div className='photo'>
                        <img src='https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg' className='img-fluid'></img>
                            <div className='preview-badge'>Vier</div>
                        </div>
                        <div className='content'>
                            <p className='txt4'>ASUS AB/C Mainboard</p>
                            <p className='txt5'>Ein Monster im Schafspelz</p>
                            <p className='txt2'>Dieses Mainboard vereint Design gepart mit Roher Leistung welche vor allem in der Gamerzene immerwieder für Topleistungen führt.</p>
                        </div>
                        <div className='footer'>
                            <ul>
                                <li>Hersteller: ASUS</li>
                                <li>Sockel: 1234</li>
                                <li>Arbeitsspeicher; DDR4 2666 - 6000 MH</li>
                                <li>Formfaktor: ATX</li>
                            </ul>
                            <button type='button' className='btn btn-secondary btn-sm'>Details</button>
                            <button type='button' className='btn btn-primary btn-sm'>In den Warenkorb</button>
                            <button type='button' className='btn btn-secondary btn-sm'>Zum Vergleich hinzufügen</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
  );
}



