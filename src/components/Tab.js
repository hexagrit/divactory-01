import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { mainColor, secondaryColor } from '../styles/theme';

const Tab = ({ number, title, children }) => {
  return (
    <div className={css(styles.tab)}>
      <div className={css(styles.header)}>
        <div className={css(styles.number)}>
          <h3>
            {number}
          </h3>
        </div>
        <h3 className={css(styles.title)}>
          {title}
        </h3>
      </div>
      <div className={css(styles.container)}>
        {children}
      </div>
    </div>
  )
};

const styles = StyleSheet.create({
  tab: {
    margin: '30px 0px'
  },
  header: {
    backgroundColor: mainColor,
    color: 'white',
    padding: '10px 15px',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    padding: 50,
    backgroundColor: secondaryColor
  },
  number: {
    width: 40,
    height: 40,
    borderRadius: 20,
    color: mainColor,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginLeft: 10
  }
})

Tab.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Tab;
