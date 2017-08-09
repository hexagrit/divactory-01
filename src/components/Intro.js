import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { mainColor, secondaryColor } from '../styles/theme';

class Intro extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const height = window.innerHeight;
    return (
      <div className={css(styles.box)} style={{ height: height }}>
        <div className={css(styles.container)}>
          <h1 className={css(styles.title)}>Cara Deploy Model dengan Lingkungan SQL sebagai database utama</h1>
          <h3>
            <span className={css(styles.by)}>
              by
          </span>
            Team Hexagrit
          </h3>
          <p>Kami akan menjelaskan bagaimana cara membentuk dan mengimplementasikan model prediksi tersebut kedalam lingkungan SQL.</p>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: mainColor
  },
  container: {
    textAlign: 'center',
    color: 'white',
    padding: '0px 50px'
  },
  title: {
    fontSize: 50,
    lineHeight: '1.2em'
  },
  by: {
    marginRight: 5,
    fontSize: 10,
    fontWeight: 200
  },
  description: {
    textAlign: 'center'
  }
})

export default Intro;
