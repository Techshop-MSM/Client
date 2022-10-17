import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ComparingModal } from '../../reusables/parts/ComparingModal';
import { DetailModal } from '../../reusables/parts/DetailModal';


export function TopSellings() {
  return (
        <div className='container' style={{marginTop: '30px'}}>
            <div className='row'>
                <h2 style={{textAlign: 'center'}} className='topunderline'>Top Selling !</h2>
                <hr/>
                <div className='col-lg-3 col-md-6 col-sm-6 mb-3' style={{minHeight: '600px',   position: 'relative'}}>
                    <div className='cardcontainer' style={{backgroundColor: 'hsla(350,50%,50%,0.0)'}}>
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
                                <li>Hersteller: ASUS</li>

                            </ul>
                            <div className='col-lg-12' style={{ position: 'absolute', top: '110%'}}>
                                <DetailModal/>
                                <ComparingModal/>
                                <br/>
                                <button type='button' className='hvr-rectangle-out testbtn btn btn-sm' style={{width: '93%', marginTop: '10px',marginLeft: '10px', marginRight: '10px' }}>In den Warenkorb</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 mb-3' style={{minHeight: '600px',   position: 'relative'}}>
                    <div className='cardcontainer' style={{backgroundColor: 'hsla(350,50%,50%,0.0)'}}>
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
                                <li>Hersteller: ASUS</li>

                            </ul>
                            <div className='col-lg-12' style={{ position: 'absolute', top: '110%'}}>
                                <DetailModal/>
                                <ComparingModal/>
                                <br/>
                                <button type='button' className='hvr-rectangle-out testbtn btn btn-sm' style={{width: '93%', marginTop: '10px',marginLeft: '10px', marginRight: '10px' }}>In den Warenkorb</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 mb-3' style={{minHeight: '600px',   position: 'relative'}}>
                    <div className='cardcontainer' style={{backgroundColor: 'hsla(350,50%,50%,0.0)'}}>
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
                                <li>Hersteller: ASUS</li>

                            </ul>
                            <div className='col-lg-12' style={{ position: 'absolute', top: '110%'}}>
                                <DetailModal/>
                                <ComparingModal/>
                                <br/>
                                <button type='button' className='hvr-rectangle-out testbtn btn btn-sm' style={{width: '93%', marginTop: '10px',marginLeft: '10px', marginRight: '10px' }}>In den Warenkorb</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 mb-3' style={{minHeight: '600px',   position: 'relative'}}>
                    <div className='cardcontainer' style={{backgroundColor: 'hsla(350,50%,50%,0.0)'}}>
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
                                <li>Hersteller: ASUS</li>

                            </ul>
                            <div className='col-lg-12' style={{ position: 'absolute', top: '110%'}}>
                                <DetailModal/>
                                <ComparingModal/>
                                <br/>
                                <button type='button' className='hvr-rectangle-out testbtn btn btn-sm' style={{width: '93%', marginTop: '10px',marginLeft: '10px', marginRight: '10px' }}>In den Warenkorb</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
  );
}



