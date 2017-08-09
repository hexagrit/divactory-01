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
        <h3 className={css(styles.item, styles.boxLeft)}>
          Team
          <br />
          Hexagrit
        </h3>
        <h3>=</h3>
        <div className={css(styles.item, styles.boxRight)}>
          {members.map((member, i) => {
            const isPlusRender = i < members.length - 1;
            return (
              <span className={css(styles.member)}>
                <Snippet text={member} />
                {isPlusRender &&
                  <span className={css(styles.plus)}>+</span>
                }
              </span>
            )
          }
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
  },
  item: {
    margin: 5
  },
  boxLeft: {
    padding: 30,
    color: mainColor
  },
  boxRight: {
    padding: 20,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  member: {
    margin: 5
  },
  plus: {
    marginLeft: 10,
    // color: mainColor
  }
})

export default Footer;
