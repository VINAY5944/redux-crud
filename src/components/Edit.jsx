import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { edituser } from '../reduxcomponents/userreducer'

const Edit = () => {


const nav=useNavigate()
  const {id}=useParams()
  const users=useSelector((state)=>state.users.data)
  const theuser=users.filter((item)=>item.id==id)
  const {name,age}=theuser[0]
  const [Name,setName]=useState(name)
  const [Age,setAge]=useState(age)
 
  const dispatch=useDispatch()

   

    
    const submitted=async(e)=>{

      e.preventDefault()
      dispatch(edituser({id:id,name:Name,age:Age}))
    console.log(Name);
    console.log(Age);
    nav('/')
    }
    
      return (
        <div>
    
       <Form    onSubmit={submitted} >
       <Form.Group as={Row} className="mb-3"  controlId="formPlaintextPassword">
            <Form.Label column sm="2">
           name
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text"   value={Name} onChange={(e)=>setName(e.target.value)} placeholder="name" />
            </Col>
          </Form.Group>
    
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
             age
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" value={Age}   onChange={(e)=>setAge(e.target.value)} placeholder="age" />
            </Col>
          </Form.Group>
          <Button variant="success"   type='submit'   >edit</Button>{' '}
        </Form>
        </div>
  )
}

export default Edit