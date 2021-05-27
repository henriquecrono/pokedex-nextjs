
import { capitalize } from '../../utils/Capitalize/index';

import styles from './pokemon.module.scss';


interface PokemonType {
  name: string;
  sprites: {
    other: {};
    versions: {};
  };
  id: number;
  types: [];
  abilities: [];
};

interface PokemonTypesType {
  type: {
    name: string;
  }
}

interface PokemonAbilityType {
  is_hidden: boolean;
  ability: {
    name: string;
  }
}

export default function Pokemon({ pokemon }: { pokemon: PokemonType }) {
  return (
    <div className={styles.pokemonContainer}>
      <h2>{capitalize(pokemon.name)}</h2>

      <div className={styles.pokemonInfo}>
        <div className={styles.pokemonSprites}>
          <img src={pokemon.sprites.other['official-artwork'].front_default} />
          <img src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} />
        </div>

        <p>
          <strong>National Dex Nº:</strong> {pokemon.id}
        </p>

        <p>
          <strong>Types: </strong>
          {pokemon.types.map((type: PokemonTypesType, index, array) => {
            return (
              <span key={index}>
                {capitalize(type.type.name)}
                {array.length - 1 != index && ' / '}
              </span>
            )
          })}
        </p>

        <p>
          <strong>Abilities: </strong>
          {pokemon.abilities.map((ability: PokemonAbilityType, index, array) => {
            return (
              <span key={index}>
                {ability.is_hidden ?
                  (<i>{capitalize(ability.ability.name)}</i>) :
                  (capitalize(ability.ability.name))
                }
                {array.length - 1 != index && ' /'}
              </span>
            )
          })}
        </p>
      </div>
    </div>
  );
};