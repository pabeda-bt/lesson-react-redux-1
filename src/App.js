import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import {loadUser} from './actions';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.props.loadUser}>Kullanıcıyı Yükle</button>
        <p>Email : {this.props.email}</p>
        <p>Password : {this.props.password}</p>
      </div>
    );
  }
}

App.propTypes = {
  loadUser : PropTypes.func.isRequired
}


const mapStateToProps = (state)=>{
  return{
    email:state._email,
    password:state._password
  }
}

const mapDispatchToProps=(dispatch, ownProps)=>{
  return {
    loadUser: ()=>dispatch(loadUser('5783d844917a640100f1890c'))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
