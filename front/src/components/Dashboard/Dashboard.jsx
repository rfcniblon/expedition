import React, { Component } from 'react';
import './Dashboard.css';
import '../Css/Liens.css'
import Events from "../Evenement/Evenement/Evenement"
const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }

        

    }
componentDidMount = () => {
            fetch(SERVER_ADDRESS + '/events')
                .then(res => res.json())
                .then(res => this.setState({ events: res }))
        }
    render() {
        return (
            <div className="blabla">

                <h1 className="centre_titre">
                    <span className="rainbow">T</span>
                    <span className="rainbow">h</span>
                    <span className="rainbow">e</span>
                    <span className="rainbow">c</span>
                    <span className="rainbow">i</span>
                    <span className="rainbow">r</span>
                    <span className="rainbow">c</span>
                    <span className="rainbow">l</span>
                    <span className="rainbow">e</span>
                    <span className="rainbow">o</span>
                    <span className="rainbow">f</span>
                    <span className="rainbow">t</span>
                    <span className="rainbow">h</span>
                    <span className="rainbow">e</span>
                    <span className="rainbow">W</span>
                    <span className="rainbow">E</span>
                    <span className="rainbow">E</span>
                    <span className="rainbow">D</span>
                </h1>
                    <p className="orientation">¡ ǝɹnʇıoʌ ǝp snld ɐ,u oıloƃ</p>

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
                </div>
                <div className="sticky-footer">

                </div>
</div>
        );
    }
}

export default Dashboard;