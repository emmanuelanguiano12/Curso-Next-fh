"use client"

import React, { useEffect, useState } from 'react'
import { PokemonGrid } from './PokemonGrid'
import { useAppSelector } from '@/store'
import { IoHeartOutline } from 'react-icons/io5'

export const FavoritesPokemons = () => {

    const pokemonsFavorites = useAppSelector(state => Object.values(state.pokemons.favorites))//Convertir a un objeto []
    // const [pokemons, setPokemons] = useState(pokemonsFavorites);

    // useEffect(() => {
    //   setPokemons(pokemonsFavorites)
    // }, [pokemonsFavorites]);
    
  return (
    <>
        {
            pokemonsFavorites.length === 0 
            ? <NoFavorites />
            : <PokemonGrid pokemons={pokemonsFavorites}/> 
        }
    </>
  )
}

export const NoFavorites = () => {
    return (
      <div className="flex flex-col h-[50vh] items-center justify-center">
        <IoHeartOutline size={100} className="text-red-500" />
        <span>No hay favoritos</span>
      </div>
    )
  }