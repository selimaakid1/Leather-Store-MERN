import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './Product'

 class ProductList extends Component {
  
    render() {
        return (
            <div className='itemlist'>
                {
                    this.props.theItems.items
                    .map(item => <Product item={item}/>)
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
         theItems: state.items
    }
   
}
export default connect(mapStateToProps)(ProductList)