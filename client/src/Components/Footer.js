import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <div className='f_wrapper'>
                <div className='f_left'>
                    <div className='sns'>
                    <a href='#' className='twitter'><i class="fab fa-twitter"></i></a>
                    <a href='#' className='facebook'><i class="fab fa-facebook-square"></i></a>
                    </div>
                    <ul className='f_guide'>
                        <li><Link to='/men'>Men</Link></li>
                        <li><Link to='/women'>Women</Link></li>
                        <li><Link to='/customize'>Customize</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                        
                    </ul>
                </div>
                <div className='h_right'>
                    <h1 className='f_logo'>Store</h1>
                    <p className='copyright'> &copy;</p>
                </div>
            </div>
            <div className='totop'>
                <img src="https://drive.google.com/uc?export=view&id=1vtSVwlIXnVm1iLIj46en9GaJy9B-ucKT" alt="totop"/>
            </div>
        </div>
    )
}

export default Footer
