import Link from 'next/link';

import styles from '../styles/home.module.scss';


interface PropsType {
  pokemon: PokemonType[];
}

interface PokemonType {
  name: string;
  url: string;
}

export default function Home(props: PropsType) {
  const capitalize = (text: string): string => text[0].toUpperCase() + text.substring(1);

  return (
    <div className={styles.homeContainer}>
      <h2>First Generation</h2>

      {props.pokemon.map((poke: PokemonType, index: number) => {
        return (
          <div key={index} className={styles.pokedexList}>
            <Link href={`/pokemon/${poke.name}`}>
              <img src={'/icon_pokeball.png'} alt="Pokéball"/>
            </Link>
            <p>{capitalize(poke.name)}</p>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
  const data = await response.json();

  return {
    props: {
      pokemon: data.results
    },
    revalidate: 60 * 60 * 1
  };
};
