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
    const number = 2;
    const title = 'Melakukan Prediksi Data Daru Menggunakan Model yang Telah Dibuat';
    const gist1 = '0f64611a7b82f23a61ec759c75d92745';
    const gist2 = '5f494ce81472fec3ced34836ed4d6efc';
    const gist3 = 'f0ce64f4b02e62dd650f545afe0972f6';

    return (
      <div>
        <Tab
          number={number}
          title={title}
        >
          <p>Sebelum melakukan prediksi, kita perlu membuat tabel SQL tempat menyimpan hasil prediksi kita dengan query SQL berikut.</p>
          <Gist
            id={gist1}
          />
          <p>Selanjutnya kita buat file <Snippet text="test.py"/> . Import semua library yang diperlukan dan load model <Snippet text="PCA"/> dan <Snippet text="CLG ( gradient boosting )"/> yang sudah kita buat dilangkah sebelumnya.</p>
          <Gist
            id={gist2}
          />
          <p>Setelah itu, kita akan mengambil data dari MySQL sebanyak per seribu data agar tidak membebani server, dan setiap per seribu data tersebut dilakukan proses reduksi menggunakan model <Snippet text="PCA"/> yang telah dibuat dan dipredict menggunakan <Snippet text="CLG"/> . Setelah itu semua data tersebut dimasukkan kedalam tabel <Snippet text="hasil_prediksi"/> .</p>
          <Gist
            id={gist3}
          />
        </Tab>
      </div>
    );
  }
}

export default Example;
