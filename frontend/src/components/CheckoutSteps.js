import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='checkout-steps'>
        <Nav.Item>
            { step1 ? (
                    <Nav.Link>Sign In</Nav.Link>
            ) : ( 
                <Nav.Link disabled>Sign In</Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item>
            { step2 ? (
                    <Nav.Link to='/shipping'>Shipping</Nav.Link>
            ): ( 
                <Nav.Link disabled>Shipping</Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item>
            { step3 ? (
                    <Nav.Link to='/payment'>Payment</Nav.Link>
            ): ( 
                <Nav.Link disabled>Payment</Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item>
            { step4 ? (
                    <Nav.Link to='/placeorder'>Place Order</Nav.Link>
            ): ( 
                <Nav.Link disabled>Place Order</Nav.Link>
            )}
        </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps