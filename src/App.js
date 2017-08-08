import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './ducks/number';
import './App.css';
import Intro from './components/Intro';
import Example from './components/Example';
import { StyleSheet, css } from 'aphrodite';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Intro />
        <div className={css(styles.container)}>
          <Example
            number={1}
            title="Map"
            gistId="31480a545e40fecf39eb12b11cc3fad2"
          />
          <Example
            number={2}
            title="Reduce"
            gistId="87825a18e6685144ae3b"
          />
          <Example
            number={3}
            title="Filter"
            gistId="ffd42dff7def4fa7420083b1ba42fb51"
          />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: ' 20px 70px'
  }
})

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
