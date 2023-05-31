import React from 'react'
import { heroes } from '../heroes'
import './MarvelScreen.css'
import HeroeCard from '../Heroes/HeroeCard';

export default function MarvelScreen() {

  let newHeroes = heroes.filter(heroe => heroe.publisher === 'Marvel Comics')
  return (
    <>
      <div className='main-screen-container'>
        <h1 className='title-screen'>Marvel Screen</h1>
        <hr />
        <div className='marvel-screen-container'>
          {newHeroes.map((newHeroe) => (
            <HeroeCard
              key={newHeroe.id}
              heroeImage={`src/assets/heroes/${newHeroe.id}.jpg`}
              heroeName={newHeroe.superhero}
              alterEgo={newHeroe.alter_ego}
              firstAparience={newHeroe.first_appearance}
            />
          ))}
        </div>
      </div>
    </>
  )
}