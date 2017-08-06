import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './ducks/number';
import './App.css';
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
        <h1>Hexagrit App</h1>
        {/* {arr.map(item =>
          <p>{item}</p>
        )}
        <button onClick={this.randomNumberClick}>random</button> */}
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
