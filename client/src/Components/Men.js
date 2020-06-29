import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './Product'

class Men extends Component {
    render() {
        return (
            <div className='gender'> 
                <div className='itemlist'>
                {
                    this.props.theItems.items
                    .filter(item => item.gender === 'Men')
                    .map(item => <Product item={item}/>)
                }
            </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
         theItems: state.items
    }
   
}
export default connect(mapStateToProps) (Men)