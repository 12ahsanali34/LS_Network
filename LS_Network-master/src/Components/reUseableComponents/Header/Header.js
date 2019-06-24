import React from 'react';
import './Header.css';
import Telegram_icon from '../../../Images/telegram-icon.png';
import Down_arrow from '../../../Images/down-arrow.png';
export default class Sign_in extends React.Component {
    render() {
      return (
          <div className="header">
              <div className="textDiv">
                  <p style={{alignSelf:'center',textAlign:'center',color:'#fff',fontSize:'14px'}}>
                      Our pre-ICO has been started. Hurry up to <span style={{color:'#f85d5b',fontSize:'14px'}}>get 20% bonus</span>
                  </p>
              </div>
              <div className="buttonDiv">
                <div className="buttonSubDiv">
                    <div className="buttonStyle">
                      <a style={{textDecoration:'none',display:'flex'}} href="#">
                        <p style={{color:'#00a2ff',alignSelf:'center',textAlign:'center',fontSize:'12px'}}>BUY TOKEN</p>
                      </a>
                    </div>
                    <div className="buttonStyle">
                      <a style={{textDecoration:'none',display:'flex'}} href="#">
                        <p style={{color:'#fff',alignSelf:'center',textAlign:'center',fontSize:'12px'}}>SIGN IN</p>
                      </a>
                    </div>
                </div>

                <div className="dropDownSubDiv">
                  <img style={{width:'40px',height:'40px',display:'block',marginRight:10}} src={Telegram_icon} alt="Telegram_icon" />
                      <a style={{textDecoration:'none'}} href="#">
                          <p style={{color:'#abf743',display:'flex'}}>EN
                            <span style={{paddingLeft:'5px'}}>
                              <img style={{width:'7px',height:'5px'}} src={Down_arrow} alt="Down_arrow" />
                            </span>
                          </p>
                      </a>
                  </div>
              </div>
          </div>         
      )
    }
  }


