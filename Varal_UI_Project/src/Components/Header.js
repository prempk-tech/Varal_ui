import React from 'react';
import '../Styles/header.css'
import Pricecard from '../Components/Pricecard';
import Card from './Card';
import Info from './Info';
import Footer from './Footer';
class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <header>
                        <div>
                            <img src={require('../Assets/Group 114.png')} alt="" />
                        </div>
                        <div>
                            <ul>
                                <li><a href="#"></a>Home</li>
                                <li><a href="#"></a>Services</li>
                                <li><a href="#"></a>Pricing</li>
                                <li><a href="#"></a>About Us</li>
                                <li className="active"><a href="#"></a>Start a Company</li>
                            </ul>
                        </div>
                    </header>

                    <div><input className="search" type="text" placeholder="Search Term | Topic" /></div>
                    {/* ----------------------------------IMAGE AND CONTENT------------------------------------------------------------------------------- */}
                    <div className="card">
                        <div className="card-left">
                            <h3>Claim a Free Quote</h3>
                            <h1><span className="highlight">Get started</span> on fulfilling<br /> your Dubai or UAE <br /> dream.</h1>
                            <h3>UAE & Offshore Company</h3>
                            <p id="sec1">We provide you with information about UAE or
                                Offshore Company Registration & help you
                                setup your company with a bank account and
                                visas</p>
                            <div className="btn">
                                <button>Start a Company</button>
                                <button>Renew a Company</button>
                            </div>
                        </div>

                        <div className='border-box'>
                            <img src={require('../Assets/ILLUSTRATION.png')} alt="" width={650} height={550} />
                        </div>
                    </div>


                    {/* -----------------iNFO SECTION-------------------------------- */}
                    {/* info css in header.css */}

                    <Info />

                    {/* ------------------------------------------CARD PAGE----------------------------------------- */}
                    {/* Card css also in header.css  */}

                    <Card />

                    <div className="info">
                        <h2><span className="highlight">Most popular affordable pricing </span><br /> per
                            jurisdictions are brought to you to
                            kick off your adventure.</h2>
                    </div>
                    <div>
                        <Pricecard />
                    </div>
                    <div>
                        <Footer />
                    </div>
                    <div className='searchbar'>
                        <input className="search" type="text" placeholder="Enter email address" />
                        <img src={require('../Assets/Group 34.png')} alt="" height={55} className='searchicon' />
                    </div>
                    <div className='icons'>
                        <img src={require('../Assets/Vector-5.png')} alt="" height={50} className='searchicon2' />
                        <br />
                        <img src={require('../Assets/Vector-6.png')} alt="" height={50} className='searchicon2' />
                        <br />
                        <img src={require('../Assets/Vector-8.png')} alt="" height={50} className='searchicon2' />
                        <br />
                        <img src={require('../Assets/Vector-7.png')} alt="" height={50} className='searchicon2' />
                    </div>
                    <footer className='foot-content'>
                        <div>
                            Varaluae 2023 &#169; All Right Reserved
                        </div>
                    </footer>
                </div>

            </div>
        )
    }
}
export default Header;