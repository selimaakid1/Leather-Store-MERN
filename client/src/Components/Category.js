import React from 'react'
import {Link} from 'react-router-dom'

function Category() {
    return (
        <div className='category-div'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6 shop-men'>
                    <Link to='/men'><img src='https://thejacketmaker-images.s3.amazonaws.com/Men_Leather_Jackets-1582542134251.jpg'/></Link>
                    <h4 className='category-title'>Men</h4>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6 shop-woman'>
                    <Link to='/women'><img src='https://thejacketmaker-images.s3.amazonaws.com/Women_Leather_Jackets-1582542134390.jpg'/></Link>
                    <h4 className='category-title'>Women</h4>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 custom'>
                    <Link to='/customize'><img src='/image/Leather.jpg' /></Link>
                    <h4 className='category-title'>Custom Leather Jackets</h4>
                </div>
            </div>
        </div>
    )
}

export default Category
