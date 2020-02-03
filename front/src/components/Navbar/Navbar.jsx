import React, {Component} from 'react';
import './Navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
             <div>
            <nav className="bla">
                <header className="headers">
                    <a href="/" className="brandlogo">
                        <div className="nomlogonav row">
                            
                            <p className="column">Expe</p>
                        </div>
                    </a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                    
                    <ul className="menu">
                        <li><a href="/Evenement">Evenement</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/Panier">Panier</a></li>
                    </ul>
                </header>
            </nav>
            </div>
         );
    }
}
 
export default Navbar;