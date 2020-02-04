import React, { Component } from 'react';
import './Dashboard.css';
import '../Css/Liens.css'
const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

class Dashboard extends Component {



    }
componentDidMount = () => {
            fetch(SERVER_ADDRESS + '/events')
                .then(res => res.json())
                .then(res => this.setState({ events: res }))
        }

    render() {
        return (
            <div className="blabla">



                   
                <div className="block-evenement-mid">


                    <h3 className="contain-evenement-mid rainbow">{this.props.name}</h3>
                    <p className="contain-evenement-mid rainbow">{this.props.date}</p>
                    <div className="div_img_part">
                        <img  alt={this.props.alt} src={SERVER_ADDRESS + "/images/" + this.props.photo} />

  <div className=" rainbow block-event">
                    <div className="title-center">
                        <strong className="rainbow title-event">Nos Evenements</strong>
                    </div>                                                                                    
                    <div className="rainbow row wi-12 max-wi-1000 justify-content-center">
                        {this.state.events.map((event) => (
                            <Events
                                name={event.name}
                                photo={event.photo}
                                alt={event.alt}
                                artiste={event.artiste}
                                date={event.date}
                                heure={event.heure}
                                description={event.description}
                                nombre={event.nombre}  
                                prix={event.prix}  
                            />
                        ))}

                    </div>
                    <p className="contain-evenement-mid rainbow">{this.props.description}</p>
                    <h3 className="contain-evenement-mid rainbow">{this.props.artiste}</h3>
                    <h3 className="contain-evenement-mid rainbow">{this.props.nombre} places encore dispo ⚠</h3>
                    <button className="rainbow">Réservation</button>

                </div>
                <div className="sticky-footer">

                </div>
            </div>

        );
    }
}


export default Dashboard;