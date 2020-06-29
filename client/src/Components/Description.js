import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'



class Description extends Component {
    state = {
        items: {
            id: '',
            title: '',
            img: '',
            description: '',
            price: ''
        }

    }
    UNSAFE_componentWillMount() {
        this.setState({
            items: this.props.theItems.items.filter(
                el => el.id === this.props.match.params.id
            )[0]
        })
        console.log(this.props.match.params.id)
    }

    render() {
        return (
            <div >
                <img src={this.state.items.img} />
                <h4 className='title-prod'>{this.state.items.title}</h4>
                <p className='price-prod'>{this.state.items.price}$</p>
                <h4 className='desc-prod'>{this.state.items.description}</h4>
                <label for="size">Size</label>

                <select name="size" id="size">
                    <option value="choose">Choose</option>
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                </select>
                {/* <Button variant="light" onClick={() => { addToCart(item.id) }} >Add to cart</Button> */}
                <Link to='/'><Button variant='light'>Home</Button></Link>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        theItems: state.items
    }

}
export default connect(mapStateToProps)(Description)