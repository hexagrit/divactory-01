import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Intro extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const height = window.innerHeight;
    return (
      <div className={css(styles.box)} style={{ height: height }}>
        <div className={css(styles.container)}>
          <h1 className={css(styles.title)}>The Readme</h1>
          <h3>
            <span className={css(styles.by)}>
              by
          </span>
            Hexagrit Team
          </h3>
          <p className={css(styles.description)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel posuere ante. Praesent quis eros urna. Donec condimentum dictum est, cursus dictum leo posuere sit amet. Phasellus eget tristique sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin odio nec scelerisque vehicula. Proin mi risus, sollicitudin non venenatis ac, efficitur eget neque. Etiam vel nunc malesuada, sodales ante ornare, vestibulum magna. Morbi a euismod lectus. Etiam tellus tellus, sollicitudin eget euismod quis, ullamcorper non felis. In malesuada venenatis mollis. Integer porttitor auctor rutrum. Nullam sit amet augue congue, sagittis risus in, cursus felis. Integer semper semper lorem.
          </p>
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
    backgroundColor: '#965e7d'
  },
  container: {
    textAlign: 'center',
    color: 'white'
  },
  title: {
    fontSize: 50
  },
  by: {
    marginRight: 5,
    fontSize: 10,
    fontWeight: 200
  },
  description: {
    padding: '0px 80px'
  }
})

export default Intro;
