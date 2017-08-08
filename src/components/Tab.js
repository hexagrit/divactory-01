import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const Tab = ({ title, children }) => {
  return (
    <div className={css(styles.tab)}>
      <h4 className={css(styles.title)}>
        {title}
      </h4>
      <div className={css(styles.container)}>
        {children}
      </div>
    </div>
  )
};

const styles = StyleSheet.create({
  tab: {
    margin: '20px 0px'
  },
  title: {
    backgroundColor: '#965e7d',
    color: 'white',
    padding: '30px 15px',
    margin: 0
  },
  container: {
    padding: 50,
    backgroundColor: '#eee'
  }
})

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Tab;
