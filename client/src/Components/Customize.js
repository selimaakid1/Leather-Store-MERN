import React, { Component } from 'react'

class Customize extends Component {
    render() {
        return (
            <div>
                <div className='custom-header'>
                    <h1 className='custom-title'>Custom Jackets</h1>
                    <p className='custom-text'>Design Your Custom Jackets With Your Own Colors, Fabrics, Embroidery, Logos & More. No Minimum Quantity!</p>
                </div>
                <div >

                    <h1 className='start-title'>Start your consultation</h1>


                    <form className='row custom-form'>
                        <div className='class="col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <input type='text' placeholder='Full Name' required />
                        </div>
                        <div className='class="col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <input type='email' placeholder='Email' required/>
                        </div>
                        <div className='class="col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <input type='number' placeholder='Phone Number' required />
                        </div>
                        <div className='class="col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <input type='text' placeholder='Company or organization' required/>
                        </div>
                        <div className='class="col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <input type='number' placeholder='Quantity' required/>
                        </div>
                        <div className='class="col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <input type='text' placeholder='Country' required/>
                        </div>
                        <div className='class="col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <input type='text' placeholder='Gender' required/>
                        </div>
                        <div className='class="col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <input type='text' className='description' placeholder='Description: Please write description for your custom order here!' />
                        </div>


                    </form>

                    <div className='wrapper'>
                        <div class="button">
                            <span class="button__mask"></span>
                            <span class="button__text">Get Started</span>
                            <span class="button__text button__text--bis">Get Started</span>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Customize