import React, { Component } from 'react'
import { WrappedMap } from './Map'

class Contact extends Component {
    render() {
        return (
            <div className='gender'>
                <h1 className='start-title'>Contact Us</h1>
                <form className='row contact-form'>
                    <div className='class="col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        <input type='text' placeholder='Full Name' required />
                    </div>
                    <div className='class="col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        <input type='email' placeholder='Email' required />
                    </div>
                    <div className='class="col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        <input type='number' placeholder='Phone Number' required />
                    </div>
                    <div className='class="col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        <input type='text' className='description' placeholder='Message' required />
                    </div>
                </form>
                <div className='wrapper'>
                    <div class="button">
                        <span class="button__mask"></span>
                        <span class="button__text">Submit</span>
                        <span class="button__text button__text--bis">Submit</span>
                    </div>
                </div>
                <div className='map'>
                    <WrappedMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </div>
        )
    }
}
export default Contact