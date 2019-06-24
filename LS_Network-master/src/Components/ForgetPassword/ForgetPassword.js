import React from 'react';
import Sign_in_image from '../../Images/sign-in-girl.png';
import EYE_ICON from '../../Images/eyeIcon.png';
import Popup from '../reUseableComponents/PopUp/PopUp';
import './ForgetPassword.css';
import { Link } from 'react-router-dom';
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
                <div className="mainBody">
                    <div className="imageClass" style={{height:'100%',width:'100%',overflow:'hidden'}}>
                        <img style={{width:'100%',height:'100%',display:'block'}} src={Sign_in_image} alt="Logo" />
                    </div>
                    <div className="formClass" style={{width:'100%',height:'100%',background:'#fff'}}>
                      <div className="textInputSubDiv">
                       <div style={{width:'50%',alignItems:'center',justifyContent:'center',display:'block'}}>
                            
                            <h1 style={{margin:'0px 0px 10px 0px'}}>Reset your Password</h1>
                            <p style={{margin:'3px 0px 15px 0px',color:'gray'}}>Enter the last password you remember</p>
                            
                           <div className="textInputStyle">
                              <input ref={el => this.inputpass = el} onChange={(text)=>{
                                    this.setState({password:text.target.value})
                                    console.log(this.state.password)
                                  }} style={{width:'80%',height:'95%',border:'none'}} type='password' name="title" 
                                  placeholder="Enter your password" />
                                <img onClick={this.ShowPassword} style={{width:'20px',height:'20px',display:'block'}} src={EYE_ICON} alt="Logo" />
                           </div> 
                          <div style={{width:'100%',height:'50px',alignItems:'center',display:'flex'}}>
                            <div className="button1">
                                <Link style={{ textDecoration: 'none' }} to="/"><p id="buttonText2">NEXT</p></Link>
                            </div>
                            <div id="button2">
                              <Link style={{ textDecoration: 'none' }} to="/"><p id="buttonText2">Skip</p></Link>
                            </div>
                          </div>
                       </div>
                      </div>
                    </div>
                </div>
          </div>
      )
    }
  }


