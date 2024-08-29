import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


export const metadata = {
 title: 'Favoritos',
 description: 'Page Favoritos',
};


export default async function PokemosPage() {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de pokemons favoritos: <small className="text-blue-500">Global State</small></span>
      
      <PokemonGrid pokemons={[]}/>
    </div>
  );
}