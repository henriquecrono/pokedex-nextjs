import Link from 'next/link';

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
    <div>
      <h1>Pokémon</h1>

      {props.pokemon.map((poke: PokemonType, index: number) => {
        return (
          <div key={index}>
            <p>{capitalize(poke.name)}</p>
            <Link href={`/pokemon/${poke.name}`}>
              link
            </Link>
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
