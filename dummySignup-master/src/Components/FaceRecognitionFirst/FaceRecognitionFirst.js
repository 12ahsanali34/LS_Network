import React from 'react';
import './FaceRecognitionFirst.css';
import { Link } from 'react-router-dom'
export default class FaceRecognitionFirst extends React.Component {
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
                <div className="background">
                    <div className="centerCircle"></div>
                    <div className="cameraIcon"></div>
                    <div className="textDiv">
                        <p className="headingStyle">RECOGNITION YOUR FACE</p>
                        <p className="peragraphStyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation.</p>
                    </div>             
                    <div className="buttom">
                        <Link style={{ textDecoration: 'none' }} to="/second"><p className="buttonText">NEXT</p></Link>
                    </div>         
                </div>
          </div>
      )
    }
  }
  


