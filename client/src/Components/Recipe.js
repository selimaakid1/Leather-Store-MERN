import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addShipping, substractShipping } from '../Actions/CartActions'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { toast } from 'react-toastify'

toast.configure();

class Recipe extends Component {
    handleChecked = (e) => {
        if (e.target.checked) {
            this.props.addShipping();
        }
        else {
            this.props.substractShipping();
        }
    }
    componentWillUnmount() {
        if (this.refs.shipping.checked)
            this.props.substractShipping()
    }
    handleToken = (token, addresses) => {
        // console.log({token, addresses})
        //     const response = axios.post('/checkout', {
        //         token,
        //         total
        //     })
        //     const { status } = response.data
        //     if (status === 'success'){
        //         toast('Success! Check emails for details',
        //         {type: 'success'})
        //     }else{
        //         toast('Something went wrong', {
        //             typs: 'error'
        //         })
        //     }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="collection">
                        <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                                <span className='shipping-text'>Shipping(+6$)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className='wrapper'>
                        {/* <div class="button">
                            <span class="button__mask"></span>
                            <span class="button__text">Checkout</span>
                            <span class="button__text button__text--bis">Checkout</span>
                        </div> */}
                    </div>
                    <StripeCheckout
                        stripeKey='pk_test_CR7hzuyt2J88AWd2Fm8BEq5i00sPgSzjra'
                        token={this.handleToken}
                        billingAddress
                        shippingAddress
                        amount={this.props.total * 100}
                    />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.items.total
    }
}


export default connect(mapStateToProps, { addShipping, substractShipping })(Recipe)