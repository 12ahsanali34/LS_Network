import React from 'react';
import Sign_in_image from '../../Images/sign-in-girl.png';
import Popup from '../reUseableComponents/PopUp/PopUp';
import './EnterNewPass.css';
import { Link } from 'react-router-dom';
import EYE_ICON from '../../Images/eyeIcon.png';
export default class Sign_in extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        fullWindowHeight:null,
        email:null,
        password:null,
        showPopup:false
      }
      this.sign_inHanhdler = this.sign_inHanhdler.bind(this)
      this.resetFields = this.resetFields.bind(this)
      this.closePopup = this.closePopup.bind(this)
    }
    closePopup(){
     console.log('close popup')
     this.setState({
      showPopup:false
     })
    }
    sign_inHanhdler(){
      if(this.state.email === null && this.state.password === null){
        console.log('both is null ', this.state.email)
        alert('both is null')
      }
      else if(this.state.email === null){
        console.log('email is null ', this.state.email)
        alert('email is null')
      }
      else if(this.state.password === null){
        console.log('password is null ', this.state.email)
        alert('password is null')
      }
      else{
        console.log('success')
        alert('success')
      }
    }
    resetFields(){
      if(this.state.email !== null && this.state.password !== null){
        this.setState({
          email:null,
          password:null
        })
        this.inputemail.value = "";
        this.inputpassword.value = "";
        console.log('reset success')
      }
      else{
        console.log('already reseted')
      }
    }
    componentWillMount(){
      var fullHeight = window.innerHeight
      this.setState({
        fullWindowHeight : fullHeight
      })
      console.log(fullHeight, ' inner height')
    }
    render() {
      return (
          <div style={{height:this.state.fullWindowHeight}}>
                {this.state.showPopup && <Popup close={this.closePopup}/>}
                <div className="mainBodyEnterNewPass">
                    <div className="imageClassEnterNewPass" style={{height:'100%',width:'100%',overflow:'hidden'}}>
                        <img style={{width:'100%',height:'100%',display:'block'}} src={Sign_in_image} alt="Logo" />
                    </div>
                    <div className="formClassEnterNewPass" style={{width:'100%',height:'100%',background:'#fff'}}>
                      <div className="textInputSubDivEnterNewPass">
                       <div style={{width:'50%',alignItems:'center',justifyContent:'center',display:'block'}}>
                            
                            <h1 style={{margin:'0px 0px 10px 0px'}}>Reset your Password</h1>
                            <p style={{margin:'3px 0px 15px 0px',color:'gray'}}>Get back to your account.</p>
                            
                          <div className="textInputStyleEnterNewPass">
                              <input ref={el => this.inputemail = el} onChange={(text)=>{
                                    this.setState({email:text.target.value})
                                    console.log(this.state.email)
                                  }} style={{width:'80%',height:'95%',border:'none'}} type="text" name="title" placeholder="Type your password" />
                                <img style={{width:'20px',height:'20px',display:'block'}} src={EYE_ICON} alt="Logo" />
                           </div>

                           <div className="textInputStyle2EnterNewPass">
                              <input ref={el => this.inputpassword = el} onChange={(text)=>{
                                  this.setState({password:text.target.value})
                                  console.log(this.state.password)
                                }} style={{width:'80%',height:'95%',border:'none'}} type="text" name="title" placeholder="Re-type your password" />
                                <img style={{width:'20px',height:'20px',display:'block'}} src={EYE_ICON} alt="Logo" />
                           </div>                         
                         
                          <div className="TEXT_DIVEnterNewPass">
                             <p className="TEXTEnterNewPass">
                                Use a password that has at least 8 characters, use at least one number, one uppercase letter, one lowercase letter and one special symbol.
                             </p>
                          </div>


                          <div style={{width:'100%',height:'50px',alignItems:'center',display:'flex'}}>
                            <div className="button1EnterNewPass">
                              <Link style={{ textDecoration: 'none' }} to="/PassChangeSuccess"><p className="buttonText1EnterNewPass">NEXT</p></Link>
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


