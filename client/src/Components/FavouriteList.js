import React, { Component } from 'react'
import { connect } from 'react-redux'

class FavouriteList extends Component {
    render() {
        let favouritesitems = this.props.items.length ? (
            this.props.items.map(
                item => {
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
                                
                            </div>
                        </div>
                    )
                }
            )
        ):
        (
            <p className='nothing'>Nothing</p>
        )
        return (
            <div className="container">
                <div className="fav">
                    <h5 className='order-title'>Your favourite list</h5>
                    <ul className="collection">
                        {favouritesitems}
                    </ul>
                </div>
                </div>


        )}
}

const mapStateToProps = state => {
    return {
        items: state.items.favourites
    }
}
export default connect(mapStateToProps)(FavouriteList)