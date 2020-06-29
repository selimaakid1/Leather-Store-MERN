import React from 'react'
import Category from './Category'
import Why from './Why'
import Products from './Products'


function Home() {
    return (
        <div className='gender'>
            <Category />
            <br />
            <hr />
            <Products />
            <Why />
        </div>
    )
}

export default Home