import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-hero">

                <Link to='/' class='navbar-brand'>My Store</Link>
                <button class="navbar-toggler hamburger hamburger--collapse" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div class="hamburger-box">
                        <div class="hamburger-inner"></div>
                    </div>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">

                        <li class="nav-item">
                            <Link to='/men'>Men</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/women'>Women</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/customize'>Customize</Link>
                        </li>
                        <div class='dropdown'>
                            <li class="nav-item">
                                <Link to='/register'><i class="far fa-user fa-fw"></i></Link>
                                
                            </li>
                        </div>
                        <li class="nav-item heart">
                            <Link to='/favourite'><i class="far fa-heart fa-fw"></i></Link>
                        </li>
                        <li>
                            <Link to='/cart'><i class="fas fa-shopping-cart fa-fw"></i></Link>
                        </li>

                        {/* <li class="nav-item">
                            <Link to='/register'>Register</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/login'>Login</Link>
                        </li> */}

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
