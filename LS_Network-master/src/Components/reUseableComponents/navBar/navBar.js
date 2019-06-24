import React from 'react';
import './navBar.css';
import Logo from '../../../Images/logo.png';

export default class Sign_in extends React.Component {
    render() {
      return (
          <div className="navBar">
            <div className="logSubDiv">
              <img style={{width:'50%',height:'55%'}} src={Logo} alt="logo" />
            </div>
            <div className="navSubDiv">
              <div style={{width:'100%',height:'50%',display:'flex',justifyContent:'space-around'}}>
                <a style={{textDecoration:'none'}} href="#">
                  <p style={{color:'#fff'}}>HOME</p>
                </a>
                <a style={{textDecoration:'none'}} href="#">
                  <p style={{color:'#fff'}}>ABOUT</p>
                </a>
                <a style={{textDecoration:'none'}} href="#">
                  <p style={{color:'#fff'}}>TEAM</p>
                </a>
                <a style={{textDecoration:'none'}} href="#">
                  <p style={{color:'#fff'}}>TECHNOLOGY</p>
                </a>
                <a style={{textDecoration:'none'}} href="#">
                  <p style={{color:'#fff'}}>ROADMAP</p>
                </a>
                <a style={{textDecoration:'none'}} href="#">
                  <p style={{color:'#fff'}}>TOKEN SALE</p>
                </a>
                <a style={{textDecoration:'none'}} href="#">
                  <p style={{color:'#fff'}}>FAQ</p>
                </a>
                <a style={{textDecoration:'none'}} href="#">
                  <p style={{color:'#fff'}}>CONTACT</p>
                </a>
              </div>
            </div>
          </div>
      )
    }
  }


