import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { addToCart } from '../Actions/CartActions'
import { Card, Button } from 'react-bootstrap'

const Product = ({ item, addToCart }) => {

    return (
        <div className='itemcard'>
            <Card style={{ width: '18rem' }}>
                <Link to='/desc'><Card.Img variant="top" src={item.img} /></Link>
                <Card.Body>
                    <Card.Title className='card-title'>{item.title}</Card.Title>
                    <Card.Text className='card-text'>
                        {item.description}
                        {item.price}$
                     </Card.Text>
                    <Button variant="light" onClick={() => { addToCart(item.id) }} >Add to cart</Button>
                    <i class="fas fa-heart"></i>
                </Card.Body>
            </Card>

        </div>
    )
}

export default connect(null, {addToCart})(Product)
