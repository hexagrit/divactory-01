import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { mainColor, secondaryColor } from '../styles/theme';

class Snippet extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <span className={css(styles.snippet)}>
        {this.props.text}
      </span>
    );
  }
}

const styles = StyleSheet.create({
  snippet: {
    backgroundColor: mainColor,
    borderRadius: 5,
    color: 'white',
    padding: '5px 10px',
    fontSize: 13
  }
})

Snippet.propTypes = {
  text: PropTypes.string.isRequired
};

export default Snippet;
