import React from "react";
import './Evenement.css';

const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

class Evenement extends React.Component {

    render() {
        return (
            <div className="block-evenement-mid">
                <h3 className="contain-evenement-mid">{this.props.name}</h3>
                <p className="contain-evenement-mid">{this.props.date}</p>
                <div className="div_img_part">
                    <img alt={this.props.alt} src={SERVER_ADDRESS + "/images/" + this.props.photo} />
                </div>
                <p className="contain-evenement-mid">{this.props.description}</p>
                <h3 className="contain-evenement-mid">{this.props.artiste}</h3>
                <h3 className="contain-evenement-mid">{this.props.nombre}</h3>
                <button>Buy NOW !!!</button>
            </div>
        )
    }
}

export default Evenement;
