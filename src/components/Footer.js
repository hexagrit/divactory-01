import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { mainColor, secondaryColor } from '../styles/theme';
import Snippet from './Snippet';

class Footer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    const members = ['Afif', 'Desy', 'Dian', 'Guruh', 'Josi', 'Novi'];
    const browserHeight = window.innerHeight;
    return (
      <div className={css(styles.box)} style={{ height: 400 }}>
        <div className={css(styles.item, styles.boxLeft)}>
          Team
          <br />
          Hexagrit
        </div>
        <div className={css(styles.item, styles.boxRight)}>
          {members.map(member =>
            <span className={css(styles.member)}>
              <Snippet text={member} />
            </span>
          )}
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
    color: mainColor
  },
  item: {
    margin: 5
  },
  boxLeft: {
    padding: 50
  },
  boxRight: {
    borderLeft: `1px solid ${mainColor}`,
    padding: 50,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  member: {
    margin: 5
  }
})

export default Footer;
