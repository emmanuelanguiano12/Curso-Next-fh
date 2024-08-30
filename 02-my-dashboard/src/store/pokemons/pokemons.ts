import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
    favorites: {[key: string]: SimplePokemon},
}

// const getInitialState = (): PokemonsState => {
//     // if(typeof localStorage === 'undefined') return {}

//     const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}' )

//     return favorites
// }

const initialState: PokemonsState = {
    // ...getInitialState()
    favorites: {},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
        const pokemon = action.payload;
        const {id} = pokemon

        if(state.favorites[id] !== undefined) {
            delete state.favorites[id]; //Si existe el id lo elimina
            // return;
        } else {
            state.favorites[id] = pokemon; //Si no existe el id lo agrega
        }

        localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites))

    },
    setFavoritesPokemons(state, action: PayloadAction<{[key: string]: SimplePokemon}>) {
        state.favorites = action.payload;
    },
  }
});

export const {toggleFavorite, setFavoritesPokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer