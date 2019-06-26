import React from 'react';
import Sign_in_image from '../../Images/sign-in-girl.png';
import Popup from '../reUseableComponents/PopUp/PopUp';
import './EnterRegisterdPhoneNum.css';
import { Link } from 'react-router-dom';
import Success from '../../Images/success.png';
export default class Sign_in extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        fullWindowHeight:null,
        password:null,
        Passwordtype:"password"
      }
    }
    componentWillMount(){
      var fullHeight = window.innerHeight
      this.setState({
        fullWindowHeight : fullHeight
      })
      console.log(fullHeight, ' inner height')
    }
    ShowPassword = ()=>{
      if(this.inputpass.type === 'password'){
        this.inputpass.type = 'text'
        console.log(this.inputpass.type , ' if condition')
      }
      else{
        this.inputpass.type = 'password'
        console.log(this.inputpass.type , ' else condition')
      }
    }
    render() {
      return (
          <div style={{height:this.state.fullWindowHeight}}>
                {this.state.showPopup && <Popup close={this.closePopup}/>}
                <div className="mainBodyEnterRegisterdPhoneNum">
                    <div className="imageClassEnterRegisterdPhoneNum" style={{height:'100%',width:'100%',overflow:'hidden'}}>
                        <img style={{width:'100%',height:'100%',display:'block'}} src={Sign_in_image} alt="Logo" />
                    </div>
                    <div className="formClassEnterRegisterdPhoneNum" style={{width:'100%',height:'100%',background:'#fff'}}>
                      <div className="textInputSubDivEnterRegisterdPhoneNum">
                       <div style={{width:'50%',alignItems:'center',justifyContent:'center',display:'block'}}>
                            
                            <h1 style={{margin:'0px 0px 10px 0px'}}>Reset your Password</h1>
                            <p style={{margin:'3px 0px 15px 0px',color:'gray'}}>Enter your registered phone number</p>
                            
                           <div className="textInputStyleEnterRegisterdPhoneNum">
                              <input ref={el => this.inputpass = el} onChange={(text)=>{
                                    this.setState({password:text.target.value})
                                    console.log(this.state.password)
                                  }} style={{width:'95%',height:'95%',border:'none'}} type='text' name="title" 
                                  placeholder="**** **** 4536" />
                                {/* <img onClick={this.ShowPassword} style={{width:'20px',height:'20px',display:'block'}} src={EYE_ICON} alt="Logo" /> */}
                           </div> 
                          <div style={{width:'100%',height:'50px',alignItems:'center',display:'flex',marginBottom:'2%'}}>
                            <div className="button1EnterRegisterdPhoneNum">
                                <Link style={{ textDecoration: 'none' }} to="/ResetPass"><p className="buttonText1EnterRegisterdPhoneNum">NEXT</p></Link>
                            </div>
                          </div>
                            {/* green Div  ----- */}
                            <div style={{width:'100%',height:'80px',background:'#e6fbf2',marginTop:'4%',borderRadius:3,overflow:'hidden',display:'flex'}}>
                                  <div style={{height:'100%',width:'25%',display:'flex',justifyContent:'center',paddingTop:'3%'}}>
                                      <div style={{width:50,height:50}}>
                                        <img style={{width:'100%',height:'100%',display:'block'}} src={Success} alt="Success" />
                                      </div>
                                  </div>
                                  <div style={{height:'100%',width:'75%',padding:'9px 0px 0px 2%'}}>
                                      <p style={{fontSize:'15px',margin:0, color:'#4D5B61'}}>We have sent an OTP to your registered phone number Didn’t get the OTP<span style={{color:'#0084F8'}}> Resend</span></p>
                                  </div>
                              </div>
                            {/* green Div  ----- */}
                       </div>
                      </div>
                    </div>
                </div>
          </div>
      )
    }
  }


