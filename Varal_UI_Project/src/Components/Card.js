import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div>
                <div className="sec3">
                    <div className="card1">
                        <div>
                            <h4><p className='box-content'>Learn the ways in which you can benefit
                                from a UAE/Offshore Company. Then get
                                started on fulfilling your UAE dream.</p></h4>
                            <a className="quote" href="">Claim a Free Quote</a>
                        </div>
                        <div className="minicard">
                            <img src={require('../Assets/ILLUSTRATION 03  1.png')} alt="img" />
                            <h4>Bank Account Setup</h4>
                            <p className='box-content'>There are many banks in the United
                                Arab Emirates [UAE]. Both locally
                                owned and branches of
                                multinational ones. Foreign banks
                                adjust according to their parent’s
                                strategies and have changed local
                                requirements overnight in the past.
                                But we are here to help you.</p>
                            <footer>
                                <a href="" className='learn'>learn more</a>
                                <img src={require('../Assets/Vector.png')} alt="" />
                            </footer>
                        </div>
                        <div className="minicard">
                            <img src={require('../Assets/Group-2.png')} alt="img" />
                            <h4>UAE Company Visas</h4>
                            <p className='box-content'>Your application for visas is critical
                                especially if you intend to move to
                                Dubai. This becomes even more
                                urgent if your family will also move
                                with you. All the paperwork is done
                                on your behalf smoothly so that you
                                may only focus on doing what
                                matters most to you</p>
                            <footer>
                                <a href="" className='learn'>learn more</a>
                                <img src={require('../Assets/Vector.png')} alt="" />
                            </footer>
                        </div>
                    </div>
                    <div className="card2">
                        <div className="minicard">
                            <img src={require('../Assets/Group.png')} alt="img" width="290px" height="200px" />
                            <h4>Advice & Guidance</h4>
                            <p className='box-content'>All activities in the UAE are licensed.
                                Whether manufacturing, finance,
                                trading, marketing, consultancy or
                                restaurants. In some countries only
                                manufacturing is licensed. In others
                                there is a threshold below which
                                business are encouraged. Get our
                                insightfull guidance today.</p>
                            <footer>
                                <a href="" className='learn'>learn more</a>
                                <img src={require('../Assets/Vector.png')} alt="" />
                            </footer>
                        </div>
                        <div className="minicard">
                            <img src={require('../Assets/Group-1.png')} alt="img" />
                            <h4>Registration Document Preparation</h4>
                            <p className='box-content'>Several documents must be
                                prepared to start the process of
                                registering a new company in the
                                United Arab Emirates. Be it a Dubai
                                local company, a free zone one or an
                                offshore entity. Your registered
                                agent is dedicated to get this done
                                for you for a seamless process.</p>
                            <footer>
                                <a href="" className="learn">Learn more</a>
                                <img src={require('../Assets/Vector.png')} alt="" />
                            </footer>
                        </div>
                        <div>
                            <p className='box-content'>
                                We have gathered a team of
                                professionals to craft adequate
                                services you can rely on for a friction
                                free setup in UAE
                            </p>
                            <br />
                            <a className="learn" href="">Claim a Free Quote</a>
                            <img src={require('../Assets/Vector.png')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;
