import React from 'react';
import './FaceRecognitionSecond.css';
import { Link } from 'react-router-dom';
export default class FaceRecognitionSecond extends React.Component {
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
      console.log(fullHeight, ' inner height Second')
    }
    render() {
      return (
          <div style={{height:this.state.fullWindowHeight,width:'100%'}}>
                <div id="background">
                    <div id="centerCircle"></div>
                    <div id="textDiv">
                        <p id="headingStyle">ADJUST THE LIGHT FOR YOU PERFECT IMAGE</p>
                        <p id="peragraphStyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation.</p>
                    </div>             
                    <div id="buttom">
                        <Link style={{ textDecoration: 'none' }} to="/third"><p id="buttonText">CLICK</p></Link>
                    </div>     
                </div> 
          </div>
      )
    }
  }


