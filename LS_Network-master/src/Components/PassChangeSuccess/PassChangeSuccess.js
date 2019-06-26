import React from 'react';
import './PassChangeSuccess.css';
import Success from '../../Images/success.png';
import { Link } from 'react-router-dom';
export default class FaceRecognitionThird extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        fullWindowHeight:null
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
          <div style={{height:this.state.fullWindowHeight,width:'100%'}}>
                <div className="backgroundEnterNewPass">
                    <div className="centerCircleEnterNewPass">
                        <img style={{width:'80%',height:'80%',display:'block'}} src={Success} alt="Logo" />
                    </div>
                    <div className="textDivEnterNewPass">
                        <p className="headingStyleEnterNewPass">Hello Mikael</p>
                        <p className="peragraphStyleEnterNewPass">Your password is successflly changed</p>
                    </div>             
                    <div className="buttomEnterNewPass">
                        <Link style={{ textDecoration: 'none' }} to="/"><p className="buttonTextEnterNewPass">SIGN IN NOW</p></Link>
                    </div>           
                </div>
          </div>
      )
    }
  }


