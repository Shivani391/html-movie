import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const Searchform = ({handleOnSubmit}) => {
  const[str, setStr] = useState ("")
  const handleOnChange=(e)=> {
    const{value}=e.target;
    setStr(value);
  }
  const formSubmit = e=>{
    e.preventDefault();
    handleOnSubmit(str);
  }
  return (
      <div className='mt-5 text-center'>
          <h1 className="text-center">My Movie List</h1>
          <Form className="mt-3" onSubmit={formSubmit}>
      <Row>
          <col></col>
        <Col>
          <Form.Control  onChange={handleOnChange} placeholder="search movie name" />
        </Col>
        <Col>
          
        
        <Button type="Submit" varient ="primary">search</Button>
</Col>
      </Row>
    </Form>
    
      
    </div>
  )
}

export default Searchform
