import React from 'react';
import './Footer.css';
import Facebook from '../../../Images/facebook.png';
import Google_plus from '../../../Images/google-plus.png';
import Linkedin from '../../../Images/linkedin.png';
import Twitter from '../../../Images/twitter.png';

export default class Sign_in extends React.Component {
    render() {
      return (
          <div className="footer">
            <div className="textSubDiv">
              <p>Copyright ©, Liquidcash. Template Made By Radical Stack Design     |  Privacy Policy  |  Terms & Conditions</p>
            </div>
            <div className="iconSubDiv">
              <img style={{width:'30px',height:'30px',marginRight:'15px'}} src={Facebook} alt="Down_arrow" />
              <img style={{width:'30px',height:'30px',marginRight:'15px'}} src={Twitter} alt="Down_arrow" />
              <img style={{width:'30px',height:'30px',marginRight:'15px'}} src={Linkedin} alt="Down_arrow" />
              <img style={{width:'30px',height:'30px',marginRight:'15px'}} src={Google_plus} alt="Down_arrow" />
            </div>
          </div>
      )
    }
  }


