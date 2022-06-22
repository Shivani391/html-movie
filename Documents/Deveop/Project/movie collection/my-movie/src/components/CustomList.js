import React from 'react'
import { Button, Card} from 'react-bootstrap'

const CustomList = ({movie ={}, func, inSearchForm}) => {
    const {Title, Poster, imdbRating, Plot} = movie
    

  return (
    <Card style={{ width: "100%" }} 
    className="mt-3 d-flex flex-row justify-content-between">
        <div style ={{ width: "200px"}}>
    <Card.Img src={movie.Poster} style= {{width: "200px" }} />
    </div>
    <Card.Body>
      <Card.Title> list view {Title}</Card.Title>
      <Card.Title> Rating: {imdbRating}</Card.Title>
      <div>{Plot}</div>

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

export default CustomList;
