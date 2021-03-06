import React from 'react'
import { Button, Card} from 'react-bootstrap'

const CustomCard = ({movie ={}, func, inSearchForm}) => {
    const {Title, Poster, imdbRating} = movie
    

  return (
    <Card style={{ width: '18rem' }} className="mt-3">
    <Card.Img variant="top" src={Poster} />
    <Card.Body>
      <Card.Title>{Title}</Card.Title>
      <Card.Title> Rating: {imdbRating}</Card.Title>
      {inSearchForm ? (
      
     <div className="d-flex justify-content-between mt-3">
         <Button varient="primary" onClick={()=> func ({...movie, mood: "happy"})}> Happy</Button>
     
      <Button variant="danger" onClick={()=> func ({...movie, mood: "romantic"})}>Romantic</Button>
      </div>
    ) : (
    <div className="d-grid gap-2">
      <Button variant="danger" size ="lg" onClick ={()=> func(movie.imdbID)} >
        Delete Movie 
      </Button>
      
    </div>
  )}

    </Card.Body>
  </Card>
  )
}

export default CustomCard;
