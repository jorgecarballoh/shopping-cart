import {React, useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import Raiting from './Raiting'

const Filters = () => {

 const [rate, setRate] = useState(3)

  return (
    <div className='filters'>
        <span className="title">Filter products</span>
        <span>
            <Form.Check inline 
            label="Ascending"
            name='group1'
            type='radio'
            id={`inline-1`}
            />
        </span>
        <span>
            <Form.Check inline 
            label="Descending"
            name='group1'
            type='radio'
            id={`inline-2`}
            />
        </span>
        <span>
            <Form.Check inline 
            label="Include Out of stock"
            name='group1'
            type='radio'
            id={`inline-3`}
            />
        </span>
        <span>
            <Form.Check inline 
            label="Fast Delivery Only"
            name='group1'
            type='radio'
            id={`inline-4`}
            />
        </span>
        <span>
            <label style={{paddingRight:10}}>Rating:</label>
            <Raiting rating={rate} style={{cursor:"pointer"}}/>
            <Button variant='light'>Clear Filters</Button>
        </span>
         
    </div>
  )
}

export default Filters