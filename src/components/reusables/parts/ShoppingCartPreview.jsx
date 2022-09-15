import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'

export function ShoppingCartPreview() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Button variant="primary" onClick={handleShow} style={{margin: '0 2rem'}}>
                Warenkorb
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Warenkorb</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <table class="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img
                                        width="50"
                                        src="https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg"
                                        alt=""
                                    />
                                </td>
                                <td style={{ fontSize: '10px' }}>
                                    Gaming PC Survivalist Powered by MSI, Intel
                                    i5-12400F, RTX 3070 Ti{' '}
                                </td>
                                <td>
                                    <select
                                        class="form-select-sm"
                                        aria-label="Default select example"
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </td>
                                <td>1000 Euro</td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        width="50"
                                        src="https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg"
                                        alt=""
                                    />
                                </td>
                                <td style={{ fontSize: '10px' }}>
                                    Gaming PC Survivalist Powered by MSI, Intel
                                    i5-12400F, RTX 3070 Ti{' '}
                                </td>
                                <td>
                                    <select
                                        class="form-select-sm"
                                        aria-label="Default select example"
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </td>
                                <td>1000 Euro</td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        width="50"
                                        src="https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg"
                                        alt=""
                                    />
                                </td>
                                <td style={{ fontSize: '10px' }}>
                                    Gaming PC Survivalist Powered by MSI, Intel
                                    i5-12400F, RTX 3070 Ti{' '}
                                </td>
                                <td>
                                    <select
                                        class="form-select-sm"
                                        aria-label="Default select example"
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </td>
                                <td>1000 Euro</td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        width="50"
                                        src="https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg"
                                        alt=""
                                    />
                                </td>
                                <td style={{ fontSize: '10px' }}>
                                    Gaming PC Survivalist Powered by MSI, Intel
                                    i5-12400F, RTX 3070 Ti{' '}
                                </td>
                                <td>
                                    <select
                                        class="form-select-sm"
                                        aria-label="Default select example"
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </td>
                                <td>1000 Euro</td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        width="50"
                                        src="https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg"
                                        alt=""
                                    />
                                </td>
                                <td style={{ fontSize: '10px' }}>
                                    Gaming PC Survivalist Powered by MSI, Intel
                                    i5-12400F, RTX 3070 Ti{' '}
                                </td>
                                <td>
                                    <select
                                        class="form-select-sm"
                                        aria-label="Default select example"
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </td>
                                <td>1000 Euro</td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        width="50"
                                        src="https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg"
                                        alt=""
                                    />
                                </td>
                                <td style={{ fontSize: '10px' }}>
                                    Gaming PC Survivalist Powered by MSI, Intel
                                    i5-12400F, RTX 3070 Ti{' '}
                                </td>
                                <td>
                                    <select
                                        class="form-select-sm"
                                        aria-label="Default select example"
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </td>
                                <td>1000 Euro</td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        width="50"
                                        src="https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg"
                                        alt=""
                                    />
                                </td>
                                <td style={{ fontSize: '10px' }}>
                                    Gaming PC Survivalist Powered by MSI, Intel
                                    i5-12400F, RTX 3070 Ti{' '}
                                </td>
                                <td>
                                    <select
                                        class="form-select-sm"
                                        aria-label="Default select example"
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </td>
                                <td>1000 Euro</td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        width="50"
                                        src="https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg"
                                        alt=""
                                    />
                                </td>
                                <td style={{ fontSize: '10px' }}>
                                    Gaming PC Survivalist Powered by MSI, Intel
                                    i5-12400F, RTX 3070 Ti{' '}
                                </td>
                                <td>
                                    <select
                                        class="form-select-sm"
                                        aria-label="Default select example"
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </td>
                                <td>1000 Euro</td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        width="50"
                                        src="https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg"
                                        alt=""
                                    />
                                </td>
                                <td style={{ fontSize: '10px' }}>
                                    Gaming PC Survivalist Powered by MSI, Intel
                                    i5-12400F, RTX 3070 Ti{' '}
                                </td>
                                <td>
                                    <select
                                        class="form-select-sm"
                                        aria-label="Default select example"
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </td>
                                <td>1000 Euro</td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        width="50"
                                        src="https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg"
                                        alt=""
                                    />
                                </td>
                                <td style={{ fontSize: '10px' }}>
                                    Gaming PC Survivalist Powered by MSI, Intel
                                    i5-12400F, RTX 3070 Ti{' '}
                                </td>
                                <td>
                                    <select
                                        class="form-select-sm"
                                        aria-label="Default select example"
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </td>
                                <td>1000 Euro</td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" class="btn btn-primary btn-sm">
                        Warenkorb öffnen
                    </button>
                    <button type="button" class="btn btn-secondary btn-sm">
                        Zur Kasse
                    </button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export function Example() {
    return (
        <>
            {['end'].map((placement, idx) => (
                <ShoppingCartPreview
                    key={idx}
                    placement={placement}
                    name={placement}
                />
            ))}
        </>
    )
}
