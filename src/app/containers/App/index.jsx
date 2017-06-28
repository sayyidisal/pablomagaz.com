import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import styles from './styles.css';
import LinkButton from 'components/LinkButton';

export class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className={ styles.app  }>
        
        <header className={ styles.mainHeader  }>main header
              <LinkButton
                location="/blog"
                value="Blog"
              />
        </header>

        <main className={ styles.container  }>

            {this.props.children}
          
        </main>

        <footer className={ styles.container }>
              <a className={ styles.txt } href="https://github.com/atSistemas/react-base">
                <img src="assets/images/github.svg" alt="Github" width="40px" />
              </a>
        </footer>
      </div>
    );

  }
}

export default connect(null)(App);
