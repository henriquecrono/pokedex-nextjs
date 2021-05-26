import { ReactElement } from 'react';

import styles from './header.module.scss';

export const Header = (): ReactElement => {
  return (
    <div className={styles.headerContainer}>
      <img src="/pokedex.webp" alt="Pokédex" />

      <h1>
        <strong>Pokédex</strong>
      </h1>
    </div>
  );
};
