import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ex06map = ({item}) => {
    console.log(item)
  return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imgSrc} />
      <Card.Body>
        <Card.Title>{item.title} {item.birthYear}년생</Card.Title>
        <Card.Text>
         {item.content}
        </Card.Text>
        <a href={item.SNS}>
            <Button variant="primary">Instagram</Button>
        </a>
      </Card.Body>
    </Card>
  )
}

export default Ex06map