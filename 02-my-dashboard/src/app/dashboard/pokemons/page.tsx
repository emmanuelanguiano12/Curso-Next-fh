import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

const getPokemons = async(limit = 20 , offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then(res => res.json())
  
  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!, //Siempre va a venir
    name: pokemon.name
  }))

  // throw new Error('ERROR')

  return pokemons;
}

export default async function PokemosPage() {

  const pokemons = await getPokemons(151)

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de pokemons: <small className="text-blue-500">estático</small></span>
      
      <PokemonGrid pokemons={pokemons}/>
    </div>
  );
}