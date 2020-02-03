import React, {Component} from 'react';

import './Navbar.css';
import '../Css/Liens.css';

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
                            
                            <img className="rasta" src="./images/simpson.png"></img>
                        </div>
                    </a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                    
                    <ul className="menu">
                        <li><a className="rainbow" href="/Evenement">Evenement</a></li>
                        <li><a className="rainbow" href="/login">Login</a></li>
                        <li><a className="rainbow" href="/Panier">Panier</a></li>
                    </ul>
                </header>
            </nav>
            
            </div>
           
         );
    }
}
 
export default Navbar;