import React from 'react';
import Route from './Route';
import { Provider } from 'react-redux';
import store from './Redux/Store';
export default class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Route/>       
        </Provider> 
      )
    }
  }


