import React  from 'react';
import { PropTypes } from 'prop-types';
import * as styles from './styles.css';

import LinkButton from 'components/LinkButton';
const Menu = () => (
  <div>
    <LinkButton
      location="/"
      value="PM"
    />
    <nav className={ styles.navMenu }> 
      <ul>
        <li>
          <LinkButton
            location="/blog"
            value="Blog"
          />
          </li>
        <li>
         <LinkButton
          location="/#about"
          value="About"
        />
        </li>
        <li>
        <LinkButton
          location="/#contact"
          value="Contact"
        />  
        </li>
          <li>
            <a href="https://github.com/pmagaz/pablomagaz.com">Source Code</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Menu;
