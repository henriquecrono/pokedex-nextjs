import { ReactElement } from 'react';

import Link from 'next/link';

import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <Link href="/">
        <img src="/pokedex.webp" alt="Pokédex" />
      </Link>

      <Link href="/">
        <h1>
          <strong>Pokédex</strong>
        </h1>
      </Link>
    </div>
  );
};
