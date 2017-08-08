import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './ducks/number';
import './App.css';
import Intro from './components/Intro';
import Example from './components/Example';

class App extends Component {
  constructor(props) {
    super(props);
    this.randomNumberClick = this.randomNumberClick.bind(this);
  }

  randomNumberClick() {
    this.props.randomNumber()
  }

  render() {
    // const arr = [0, 1, 2, 3, 4];
    const { number } = this.props;
    const arr = number.numbers;

    return (
      <div className="App">
        <Intro />
        <Example title="Step 1" gist="31480a545e40fecf39eb12b11cc3fad2"/>
        <Example title="Step 2" gist="87825a18e6685144ae3b"/>
        <Example title="Step 3" gist="ffd42dff7def4fa7420083b1ba42fb51"/>
      </div>
    );
  }
}

App.propTypes = {
  number: PropTypes.object.isRequired,
  randomNumber: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  number: state.number
})

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(actionCreators, dispatch);
  const { randomNumber } = actions;
  return {
    randomNumber
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
