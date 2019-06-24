import React from 'react';
import Sign_in from './Components/SignIn/Sign_in';
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import FaceRecognitionFirst from './Components/FaceRecognitionFirst/FaceRecognitionFirst';
import FaceRecognitionSecond from './Components/FaceRecognitionSecond/FaceRecognitionSecond';
import FaceRecognitionThird from './Components/FaceRecognitionThird/FaceRecognitionThird';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import ResetPassword from './Components/ResetPassword/ResetPassword';

class Routing extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={ResetPassword} />
                <Route path="/second" component={FaceRecognitionSecond}/>
                <Route path="/ForgetPass" component={ForgetPassword}/>
                <Route path="/third" component={FaceRecognitionThird}/>
            </Router>
        )
    }
}
export default Routing



