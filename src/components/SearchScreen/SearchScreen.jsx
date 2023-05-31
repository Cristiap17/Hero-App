import React, { useState } from 'react';
import './SearchScreen.css'
import { heroes } from '../heroes'
import HeroeCard from '../Heroes/HeroeCard';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';


function SearchScreen() {

  const [newSearch, setNewSearch] = useState('')
  const [hero, setHero] = useState('')

  function handleChange(event) {
    setNewSearch(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault()
    setNewSearch("")
    const newHeroSearched = heroes.find(heroe => heroe.superhero.toLowerCase().trim() === newSearch.toLowerCase().trim())
    setHero(newHeroSearched);
  }

  let component = null;

  if (hero === '') {
    component = <Alert>FIND YOU FAVORITE HERO!!!</Alert>
  } else if (hero === undefined) {
    component = <Alert variant='danger'>Error!</Alert>
  } else {
    component = 
    <HeroeCard
      key={hero.id}
      heroeImage={`src/assets/heroes/${hero.id}.jpg`}
      heroeName={hero.superhero}
      alterEgo={hero.alter_ego}
      firstAparience={hero.first_appearance}
    />
  }

  return (
    <Form>
      <div className='search-screen-container'>
        <h1>Search Screen</h1>
        <hr />
        <div className='main-container'>
          <div className='form-container'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h3>Search a hero</h3>
              <hr />
              <Form.Control
                type="text"
                placeholder="Find your hero"
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={handleClick}
            >
              Search...
            </Button>
          </div>
          <div className='result-container'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h3>Result</h3>
              <hr />
              <div className={'hero-search-card'}>
                {component}
              </div>
            </Form.Group>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default SearchScreen;
