import React from 'react';
import PropTypes from 'prop-types';
import Gist from './Gist';
import Tab from './Tab';
import Snippet from './Snippet';

class Example extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const number = 1;
    const title = 'Membuat Model dari Data yang Dimiliki';
    const gist1 = 'ca9c4ed7a3aad2981507548f1e416bf1';
    const gist2 = '38d074889c57ea4c5b8984a04f7cc7bb';
    const gist3 = '98d052cbbf49859eccd36d2b422a164c';
    const gist4 = '05661a8dada7399b235ee293a088dfe6';
    const gist5 = '6897f379a4ea23f73572ddc55185680b';

    return (
      <div>
        <Tab
          number={number}
          title={title}>
          <p>Pertama-tama kita perlu definisikan koneksi database kita, buatlah file <Snippet text="dbconnect.py"/> dengan isi sebagai berikut.</p>
          <Gist
            id={gist1}
          />
          <p>Selanjutnya kita buat script untuk training datanya dengan nama <Snippet text="train.py"/> . Panggil library yang kita perlukan.</p>
          <Gist
            id={gist2}
          />
          <p>Selanjutnya ambil data yang kita miliki di tabel mysql dan dipisahkan antara fitur dan target.</p>
          <Gist
            id={gist3}
          />
          <p>Reduksi dimensi data dengan menggunakan <Snippet text="PCA" /> dengan jumlah komponen 9.</p>
          <Gist
            id={gist4}
          />
          <p>Selanjutnya train data tersebut menggunakan <Snippet text="classifier gradient boosting" /> dan simpan modelnya.</p>
          <Gist
            id={gist5}
          />
        </Tab>
      </div>
    );
  }
}

export default Example;
