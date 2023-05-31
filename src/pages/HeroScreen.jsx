import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { heroes } from '../components/heroes'
import './HeroScreen.css'


export default function HeroScreen() {
    const params = useParams()
    const navigate = useNavigate()
    const heroSelectec = heroes.find(hero => hero.superhero.toLowerCase().trim() === params.idHero.toLowerCase())

    let returnUrl = null

    heroSelectec.publisher === 'Marvel Comics' 
    ? returnUrl = '/marvel'
    : returnUrl = '/dc'

    const returnScreen = ()=>{
        window.history.back()
    }

    return (
        <div className='heroe-screen-style'>
            <Card.Img variant="left" src={`../../src/assets/heroes/${heroSelectec.id}.jpg`} />
            <Card>
                <Card.Body>
                    <Card.Title><h2>{heroSelectec.superhero}</h2></Card.Title>
                    <Card.Subtitle ><h4>{`Alter Ego: ${heroSelectec.alter_ego}`}</h4></Card.Subtitle>
                    <hr />
                    <Card.Subtitle ><h4>{`Publisher: ${heroSelectec.publisher}`}</h4></Card.Subtitle>
                    <hr />
                    <Card.Subtitle ><h4>{`Appearance: ${heroSelectec.first_appearance}`}</h4> </Card.Subtitle>
                    <hr />
                    <Card.Subtitle ><h4>{`Characters: ${heroSelectec.characters}`}</h4></Card.Subtitle>
                    <Button
                        className='btn-heroScreen'
                        variant="link"
                        onClick={returnScreen}
                    >Return
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}
