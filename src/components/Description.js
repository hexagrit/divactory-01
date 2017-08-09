import React from 'react';
import PropTypes from 'prop-types';
import Snippet from './Snippet';
import { StyleSheet, css } from 'aphrodite';
import { mainColor, secondaryColor } from '../styles/theme';

class Description extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <p>Kami akan membagi menjadi dua langkah, yaitu cara membentuk dan cara menggunakan model tersebut untuk data baru</p>
        <p>Kami mengasumsikan database yang kami gunakan memiliki 2 tabel</p>
        <ul className={css(styles.list)}>
          <li>
            <p>
              <Snippet text="Train_Data" /> terdiri dari 22 kolom, yaitu <Snippet text="peubah 1" /> sampai dengan <Snippet text="peubah 21" /> dan <Snippet text="target" />
            </p>
          </li>
          <li>
            <p>
              <Snippet text="Test_Data" /> terdiri dari 21 kolom, yaitu <Snippet text="peubah 1" /> sampai dengan <Snippet text="peubah 21" />
            </p>
          </li>
        </ul>
        <p>Bahasa pemrograman yang kami gunakan adalah <Snippet text="Python 2.7" /></p>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: secondaryColor
  },
  list: {
    padding: '0px 20px'
  }
})

export default Description;
