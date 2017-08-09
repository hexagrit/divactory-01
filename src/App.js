import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import './App.css';
import Intro from './components/Intro';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Description from './components/Description';
import Footer from './components/Footer';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Intro />
        <div className={css(styles.container)}>
          <Description />
          <Step1 />
          <Step2 />
        </div>
        <Footer />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: ' 20px 70px'
  }
})

export default App;
