import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

		<div className="container largeur_footer " id="footer">
			<div className="row text-center color-footer text-xs-center text-sm-left text-md-left">
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="#"><i className="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href="#"><i className="fa fa-angle-double-right"></i>About</a></li>
						<li><a href="#"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
						</ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="#"><i className="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href="#"><i className="fa fa-angle-double-right"></i>About</a></li>
						<li><a href="#"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
						</ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="#"><i className="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href="#"><i className="fa fa-angle-double-right"></i>About</a></li>
						<li><a href="#"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
					</ul>
				</div>
			</div>
			<div className="row color-footer" >
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
					<p className="h6">&copy All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Sunlimetech</a></p>
				</div>
			
			</div>	
		</div>


            
        );
    }
}

export default Footer;