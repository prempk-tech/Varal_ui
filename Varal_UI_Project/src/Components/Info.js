import React, { Component } from 'react'

class Info extends Component {
    render() {
        return (
            <div>
                <div className="info">
                    <div className="register">
                        <label for="">Watch the video about UAE or Offshore Company Registration </label>
                        <input type="radio" className="check" />
                    </div>

                    <h2><span className="highlight">Dedicated</span><br />to out mission we are </h2>
                    <p className="sec2">Our services include Company Formation & Renewals,
                        Trust & Fiduciary, Tax Residency Setup With Family, Bank
                        Accounts, Remote Management, Stock Trading
                        Platforms, Ownership Solutions.</p>
                </div>

                <div className="box">
                    <div className="item">
                        <div><img src={require('../Assets/dungeon.png')} alt="img" width="50px" height="50px" /></div>
                        <h4>UAE Free Zone Company</h4>
                        <p className='box-content'>Your registration agent, will answer all
                            of your questions and help you to reach
                            a conclusion that meets your objectives
                            of investing in the UAE</p> <a href="">Get started</a>
                    </div>
                    <div className="item">
                        <div><img src={require('../Assets/Vector-2.png')} alt="img" /></div>
                        <h4>Dubai Local Companies</h4>

                        <p className='box-content'>The Dubai LLC formation documents
                            are actually articles of organization or a
                            certificate of organization. You can get
                            yours today.</p>
                        <a href="">Get started</a>
                    </div>
                    <div className="item">
                        <div><img src={require('../Assets/Vector-1.png')} alt="img" /></div>
                        <h4>Offshore Compamies</h4>
                        <p className='box-content'>You can register an offshore company
                            and open its bank account in Dubai.
                            Your agent will help you along all the
                            process</p>
                        <a href="">Get started</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Info;