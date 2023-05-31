import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './HeroeCard.css'
import { useNavigate } from 'react-router-dom';

export default function HeroeCard({heroeImage, heroeName, alterEgo, firstAparience}) {

  const navigate = useNavigate()

  const changeScreen = () => {
    navigate(`/hero/${heroeName}`)
  }

  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={heroeImage} />
      <Card.Body>
        <Card.Title>{heroeName}</Card.Title>
        <Card.Text>{alterEgo}</Card.Text>
        <Card.Text>{firstAparience}</Card.Text>
        <Button onClick={changeScreen} variant="primary">More...</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
