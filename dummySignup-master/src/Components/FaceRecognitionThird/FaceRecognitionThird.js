import React from 'react';
import './FaceRecognitionThird.css';
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
                <div id="background">
                    <div id="centerCircle"></div>
                    {/* <div id="cameraIcon"></div> */}
                    <div id="textDiv">
                        <p id="headingStyle">PERFACT !</p>
                        <p id="peragraphStyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation.</p>
                    </div>             
                    <div id="buttom">
                        <Link style={{ textDecoration: 'none' }} to="/"><p id="buttonText">NEXT</p></Link>
                    </div>           
                </div>
          </div>
      )
    }
  }


