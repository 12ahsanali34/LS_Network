import React from 'react';
import Sign_in_image from '../../Images/sign-in-girl.png'
import './Sign_in.css';
import Footer from '../reUseableComponents/Footer/Footer';
import Header from '../reUseableComponents/Header/Header';
import NavBar from '../reUseableComponents/navBar/navBar';

export default class Sign_in extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        fullWindowHeight:null,
        email:null,
        password:null
      }
      this.sign_inHanhdler = this.sign_inHanhdler.bind(this)
    }
    sign_inHanhdler(){
      if(this.state.email !== null && this.state.password !== null){
        if(this.state.email !== null && this.state.password === null){
          alert('password is null')
        }
       else if(this.state.email === null && this.state.password !== null){
          alert('email is null')
        }
        else{
          alert('success')
        }
      }
      else{
        alert('both is null')
      }
      console.log('handler called')
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
                <Header/>
                <NavBar/>
                <div className="mainBody">
                    <div className="imageClass" style={{height:'100%',width:'100%',overflow:'hidden'}}>
                        <img style={{width:'100%',height:'100%',display:'block'}} src={Sign_in_image} alt="Logo" />;
                    </div>
                    <div className="formClass" style={{width:'100%',height:'100%',background:'#fff'}}>
                      <div className="textInputSunDiv">
                       <div style={{width:'65%',alignItems:'center',justifyContent:'center',display:'block'}}>
                          <input onChange={(text)=>{
                              this.setState({email:text.target.value})
                              console.log(this.state.email)
                            }} className="textInputStyle" type="text" name="title" placeholder="Email" />
                          <input  onChange={(text)=>{
                              this.setState({password:text.target.value})
                              console.log(this.state.password)
                            }} className="textInputStyle" type="text" name="title" placeholder="Password" />
                          <div onClick={this.sign_inHanhdler} style={{width:'100%',height:'50px',background:'blue',borderRadius:25,justifyContent:'center',alignItems:'center',display:'flex',marginBottom:'5%'}}>
                              <p style={{color:'#fff',alignSelf:'center',textAlign:'center',fontSize:'16px'}}>SIGN IN</p>
                          </div>
                          <div style={{width:'100%',height:'50px',justifyContent:'center',alignItems:'center',display:'flex'}}>
                            <p style={{fontSize:13}}>
                              Forgot your password? | Having trouble signing in?
                              Don't have an account?
                              <span><a href="#" style={{textDecoration:'none',color:'#acf744'}}> Sign up »</a></span>
                            </p>
                          </div>
                       </div>
                      </div>
                    </div>
                </div>
                <Footer/>
          </div>
      )
    }
  }


