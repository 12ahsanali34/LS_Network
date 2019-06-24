import React from 'react';
import './FaceRecognitionFirst.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {UserAction, UserSecAction, UserThirdAction} from '../../Redux/action';

class FaceRecognitionFirst extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        fullWindowHeight:null
      }
      this.updateFirstUser = this.updateFirstUser.bind(this)
      this.updateSecondUser = this.updateSecondUser.bind(this)
      this.updateThirdUser = this.updateThirdUser.bind(this)
    }

    async updateFirstUser(){
      await this.props.UserFirstUpdate('FirstUser')
      console.log(this.props)
    }
    updateSecondUser(){
      this.props.UserSecondUpdate('SecondUser')
      console.log(this.props)
    }
    updateThirdUser(){
      this.props.UserThirdUpdate('Third')
      console.log(this.props)
    }

    componentDidMount(){
      console.log(this.props)
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
                    <div onClick={this.updateFirstUser} className="buttom">
                        {/* <Link style={{ textDecoration: 'none' }} to="/second"><p className="buttonText">NEXT</p></Link> */}
                    </div>         
                </div>
          </div>
      )
    }
  }
  const mapStateToProps = state => {
    return state;
  }
  const mapDispatchToProps = {
   UserFirstUpdate : UserAction,
   UserSecondUpdate : UserSecAction,
   UserThirdUpdate : UserThirdAction
  }
  export default connect(mapStateToProps , mapDispatchToProps) (FaceRecognitionFirst)




