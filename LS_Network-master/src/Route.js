import React from 'react';
import Sign_in from './Components/SignIn/Sign_in';
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import FaceRecognitionFirst from './Components/FaceRecognitionFirst/FaceRecognitionFirst';
import FaceRecognitionSecond from './Components/FaceRecognitionSecond/FaceRecognitionSecond';
import FaceRecognitionThird from './Components/FaceRecognitionThird/FaceRecognitionThird';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import EnterNewPass from './Components/EnterNewPass/EnterNewPass';
import PassChangeSuccess from './Components/PassChangeSuccess/PassChangeSuccess';
import EnterRegisterdPhoneNum from './Components/EnterRegisterdPhoneNum/EnterRegisterdPhoneNum';
import EnterRecievedOTP from './Components/EnterRecievedOTP/EnterRecievedOTP';

class Routing extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={EnterRecievedOTP} />
                <Route exact path="/EnterRegisterdPhoneNum" component={EnterRegisterdPhoneNum} />
                <Route path="/ForgetPass" component={ForgetPassword}/>
                <Route path="/ResetPass" component={ResetPassword}/>
                <Route path="/EnterNewPass" component={EnterNewPass}/>
                <Route path="/PassChangeSuccess" component={PassChangeSuccess}/>
            </Router>
        )
    }
}
export default Routing



