import React,{useState} from 'react'
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { useDispatch, useSelector } from 'react-redux';
import { adduser } from '../reduxcomponents/userreducer';
import { useNavigate } from 'react-router-dom';






const Create = () => {
  
const nav=useNavigate()
const [name,setName]=useState('')
const [age,setAge]=useState('')
const users=useSelector((state)=>state.users.data)
const dispatch=useDispatch()

const submitted=async(e)=>{
  e.preventDefault()

dispatch(adduser({id:users[users.length-1].id +1 ,name:name,age:age}))
nav("/")
}

  return (
    <div>

   <Form    onSubmit={submitted} >
   <Form.Group as={Row} className="mb-3"  controlId="formPlaintextPassword">
        <Form.Label column sm="2">
       name
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
         age
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" value={age}  onChange={(e)=>setAge(e.target.value)} placeholder="age" />
        </Col>
      </Form.Group>
      <Button variant="success" type='submit' >add</Button>{' '}
    </Form>
    </div>
  )
}

export default Create