import React, { useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CustomCard from './CustomCard';
import { Col, Row} from 'react-bootstrap'
import CustomList from './CustomList';


export const MovieList = ({movieList, deleteMovie}) => {
    const [displayList, setDisplayList] = useState ([]);
    const [view, setView] =useState ();
    useEffect (() => {
        setDisplayList(movieList);
    }, [movieList]);
    const filterMovie =(mood) => {
        if (mood === "all") {
            return setDisplayList(movieList);
        }
        const tempArg = movieList.filter((item) => item.mood === mood);
        setDisplayList(tempArg);
    };
  return (
    <div>
        <Row>
            <Col className ="d-flex justify-content-between"> 
            <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" onClick ={() => filterMovie('all')} >All</Button>
      <Button variant="primary" onClick ={() => filterMovie('happy')}>Happy</Button>
      <Button variant="danger" onClick ={() => filterMovie('romantice')}>Romantic</Button>
    </ButtonGroup> 
    </Col>
    <Col className='text-end'>
        <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" onClick= { () => setView("grid")}>Grid</Button>
      <Button variant="primary" onClick= { () => setView("list")} >List</Button>
     
    </ButtonGroup>
    </Col>
        </Row>
    
            <Row className= "mt-5">
                <Col> {displayList.length} movies found! </Col>

            </Row>
        
        <Row className="mt-2">
            <Col className= "d-flex justify-content-between flex-wrap">
                {displayList.map((item, i)=> 
           view === "grid" ? (
           <CustomCard  key={i} movie={item} func ={deleteMovie}/>
            ):(
           <CustomList key ={i} movie ={item} func = {deleteMovie}/>
             )
             )}
            </Col>
        </Row>
    </div>
  )
}

export default MovieList;
