import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subQuantity, addFavourite } from '../Actions/CartActions'
import Recipe from './Recipe';

class Cart extends Component {
    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subQuantity(id);
    }
    //Add to favourites
    toggleFavAction = item =>{
        this.props.addFavourite(item)
    }    
    render() {
        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        <div className='added'>
                            <div className='row'>
                                <div className='col item-img'>
                                    <img src={item.img} />
                                </div>
                                <div className='col'>
                                    <p className='item-text'>{item.title}</p>
                                </div>
                                <div className='col'>
                                    <p className='item-text'>{item.price}$</p>
                                </div>
                                <div class="col">
                                    <i class="fas fa-plus-circle" onClick={()=>{this.handleAddQuantity(item.id)}}></i>
                                        <span>{item.quantity++}</span>
                                    <i class="fas fa-minus-circle" onClick={()=>{this.handleSubtractQuantity(item.id)}}></i>
                                </div>
                                <div class="col heart">
                                    <i class="fas fa-times" onClick={()=>{this.handleRemove(item.id)}}></i>
                                    <i class="fas fa-heart" onClick={() => {this.toggleFavAction(item)}}></i>
                                </div>

                            </div>
                        </div>

                    )
                })
            ) :
            (
                <p className='nothing'>Nothing</p>
            )
        return (
            <div className="container">
                <div className="cart">
                    <h5 className='order-title'>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
                <Recipe />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items.addedItems
    }
}
export default connect(mapStateToProps, { removeItem, addQuantity, subQuantity, addFavourite })(Cart)