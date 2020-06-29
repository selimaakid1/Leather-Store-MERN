import React from 'react'

function Why() {
    return (
        <div className='row why-container'>
            <div className='col why-icon'>
                <i class="fas fa-award" ></i>
                <h3 className='why-why'>Why you should consider leather goods?</h3>
            </div>
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12 why-self'>
                    <h1 className='why-title'>Durability</h1>
                    <p className='why-p'>High-quality leather wallets last long compared to other materials. Leather goes through a process of tanning and treatment to ensure maximum strength and durability.</p>
                </div>
                <hr />
                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12 why-self'>
                    <h1 className='why-title'>Elegant</h1>
                    <p className='why-p'>Whether in its natural or dyed state, it will always add quality to your style. Everything in leather is a plus. If you have an official meeting, accessorize your look with leather briefcases.</p>
                </div>
                <hr></hr>
                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12 why-self'>
                    <h1 className='why-title'>Resistance</h1>
                    <p className='why-p'>  Genuine leather does not peel off or crack, and this feature increases durability. It is resistant to abrasion. Compared to other materials it’s unlikely to find dust mites or fungus in leather luggage.</p>
                </div>
                <hr></hr>
            </div>
            <div className='wrapper'>
                    <div class="button">
                        <span class="button__mask"></span>
                        <span class="button__text">Read our story</span>
                        <span class="button__text button__text--bis">Read our story</span>
                    </div>
                    </div>
        </div>
    )
}

export default Why