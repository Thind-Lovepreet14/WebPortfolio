import React from 'react';

const Navbar = () => {
    return (
        <nav className="nav-container">
            <div className="img-container">
                <img src="https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1610&q=80" />
            </div>
            <h3>Lovepreet Thind</h3>
            <div className="list-container">
                <ul>
                    <li><a href="" className="active">Home</a></li>
                    <li><a  href="">About</a></li>
                    <li><a  href="">Contacts</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;