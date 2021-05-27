

export default function Pokemon({ name }) {
  return (
    <h1>{name}</h1>
    // <h1>Pokémon</h1>
  );
};

export async function getStaticProps({ params }) {
  const name = params.name;

  return {
    props: {
      name
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
    ],
    fallback: true
  }
}

