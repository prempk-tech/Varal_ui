import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="sec3">
                    <div className="card1">
                        <div class="verticalLine">
                            Read about our blogs for more
                            information on our processes
                        </div>
                        <div className='wifipos'>
                            <div className='wifiborder'>
                                <img src={require('../Assets/Vector-4.png')} alt="" />
                            </div>
                            <h3 className='content-pos'>How to start a company
                                formation in Dubai</h3>
                            <h2 className='part'>5 Minutes ago</h2>
                        </div>
                        <div className='wifipos'>
                            <div className='wifiborder'>
                                <img src={require('../Assets/Vector-4.png')} alt="" />
                            </div>
                            <h3 className='content-pos'>How to start an Offshore
                                company formation in Dubai</h3>
                            <h2 className='part'>5 Minutes ago</h2>
                        </div>
                        <div className='wifipos'>
                            <div className='wifiborder'>
                                <img src={require('../Assets/Vector-4.png')} alt="" />
                            </div>
                            <h3 className='content-pos'>SEO Dubai: Who benefits
                                the most?</h3>
                            <h2 className='part'>5 Minutes ago</h2>
                        </div>
                        <div className="verticalLine2">
                            Satidfied We are When Our
                            <br />
                            Customers Are Happy
                        </div>
                        <div className='bottomline'>
                            <img src={require('../Assets/Vector-3.png')} alt="" />
                        </div>
                        <div className='contact'>
                            <sup>&#8220;</sup>I am very happy with them. I’ll
                            continue to use their services in
                            future & highly recommend them
                            to anyone,<sub>&#8221;</sub>
                        </div>
                        <h3 className='name-content'>Muhib Abrar
                        </h3>
                        <div className='bottomline'>
                            <img src={require('../Assets/Vector-3.png')} alt="" />
                        </div>
                        <div className='contact'>
                            <sup>&#8220;</sup>Rama has a high level of integrity,
                            intellect, knowledge of his
                            business, resourcefulness and
                            humanity,<sub>&#8221;</sub>
                        </div>
                        <h3 className='name-content'>Colin Saldahna
                        </h3>
                        <div className='bottomline'>
                            <img src={require('../Assets/Vector-3.png')} alt="" />
                        </div>
                        <div className='contact'>
                            <sup>&#8220;</sup>Your advise was so complete that I
                            actually realized how beneficial
                            this would be to my clients and my
                            business.<sub>&#8221;</sub>
                        </div>
                        <h3 className='name-content'>Mark Swann
                        </h3>
                    </div>

                    <div className="card2">
                        <div class="verticalLine">
                            Read about our blogs for more
                            information on our processes
                        </div>
                        <div className='subcontent'>
                            <dl>
                                <dt><h2 className='service'>Services</h2></dt>
                                <dd className='sublist'>Products</dd>
                                <dd className='sublist'>Solutions</dd>
                                <dd className='sublist'>Assurance</dd>
                                <dd className='sublist'>FAQ</dd>
                                <dd className='sublist'>Working at Varal-Singhania
                                </dd>
                            </dl>
                        </div>
                        <div className='subcontent'>
                            <dl>
                                <dt><h2 className='service'>Policies</h2></dt>
                                <dd className='sublist'>Privacy Policy</dd>
                                <dd className='sublist'>Terms & Conditions</dd>

                            </dl>
                        </div>
                        <div className='subcontent'>
                            <dl>
                                <dt><h2 className='service'>About</h2></dt>
                                <dd className='sublist'>About us</dd>
                                <dd className='sublist'>Contact us</dd>
                            </dl>
                        </div>
                        <div className='subcontent'>
                            <dl>
                                <dt><h2 className='service'>Address</h2></dt>
                                <dd className='sublist'>608 One Lake Plaza, Cluster T,</dd>
                                <dd className='sublist'>Al Sarayat Street, Jumeirah </dd>
                                <dd className='sublist'>Lake Towers</dd>
                                <dd className='sublist'>Dubai</dd>
                                <dd className='sublist'>United Arab Emirates</dd>
                                <br />
                                <dd className='sublist'>Office Hours: Sunday to </dd>
                                <dd className='sublist'>Thursday 8:30 AM to 6:30 PM</dd>
                                <dd className='sublist'>[GMT+4]</dd>
                                <dd className='sublist'>M: +971 55 794 2016</dd>
                                <dd className='sublist'>O: +971 4 447 2061</dd>

                            </dl>
                        </div>
                        <div className='subcontent'>
                            <dl>
                                <dt><h2 className='service'>Subscribe Now</h2></dt>
                                <dd className='sublist'>Sunbscribe now to receive our
                                    Newsletters about amazing
                                    opportunities in Dubai</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;