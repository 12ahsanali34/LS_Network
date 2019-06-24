import React from 'react';
import './Popup.css';
import Cross from '../../../Images/close.png';
import Success from '../../../Images/success.png';
export default class Sign_in extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        fullWindowHeight:null,
        email:null,
        password:null
      }
    }
    render(){
        return(
            <div style={{
                width:'100%',
                height:'100%',
                background:'rgba(0,0,0,0.8)',
                position:'absolute',
                display:'flex',
                justifyContent:'center'
            }}>
                <div className="PopUp">
                   {/* for cross image ---------- */}
                       <div style={{width:'100%',height:'10%',display:'flex',justifyContent:'flex-end'}}>
                         <img onClick={this.props.close} style={{width:'20px',height:'20px',display:'block',margin:6}} src={Cross} alt="close" />
                       </div>
                    {/* for cross image ---------- */}
                    <div className="FirstRow">
                       <img style={{width:'80px',height:'80px',display:'block'}} src={Success} alt="close" />
                    </div>
                    <div className="SecondRow">
                       <p style={{fontWeight:'bold'}}>Verify Your Account ?</p>
                    </div>
                    <div className="ThirdRow">
                       <p style={{fontSize:13,color:'gray'}}>Enter the recived <strong>OTP</strong> number on your email address</p>
                    </div>

                    <div className="ForthRow">
                       <div className="ForthSubDiv">
                           <input type='number' maxLength={1} type="text" className="ForthSubDivTextInput" />
                       </div>
                       <div className="ForthSubDiv">
                           <input type='number' maxLength={1} type="text" className="ForthSubDivTextInput" />
                       </div>
                       <div className="ForthSubDiv">
                           <input type='number' maxLength={1} type="text" className="ForthSubDivTextInput" />
                       </div>
                       <div className="ForthSubDiv">
                           <input type='number' maxLength={1} type="text" className="ForthSubDivTextInput" />
                       </div>
                       <div className="ForthSubDiv">
                           <input type='number' maxLength={1} type="text" className="ForthSubDivTextInput" />
                       </div>
                       <div className="ForthSubDiv">
                           <input type='number' maxLength={1} type="text" className="ForthSubDivTextInput" />
                       </div>
                    </div>
                    <div className="FifthDiv">
                       <p style={{fontSize:13,color:'gray'}}>Didn’t get the verfication code yet ? <span style={{color:'#0084F8'}}>Resend Now</span></p>
                    </div>
                </div>
            </div>
        )
    }
}