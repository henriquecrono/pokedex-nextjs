import Pokemon from '../../components/Pokemon/index';

export default function PokemonPage({ pokemon }) {
  return (
    <Pokemon pokemon={pokemon} />
  )
};

export async function getStaticProps({ params }) {
  const name = params.name;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = await response.json();

  return {
    props: {
      pokemon
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          name: 'bulbasaur'
        }
      },
      {
        params: {
          name: 'ivysaur'
        }
      },
      {
        params: {
          name: 'venusaur'
        }
      },
      {
        params: {
          name: 'charmander'
        }
      },
      {
        params: {
          name: 'charmeleon'
        }
      },
      {
        params: {
          name: 'charizard'
        }
      },
    ],
    fallback: false
  }
}

