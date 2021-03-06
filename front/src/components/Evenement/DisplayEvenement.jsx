import React from "react";
import Events from "./Evenement/Evenement"


const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

class DisplayEvents extends React.Component {
    constructor() {
        super();
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
            <div className="sticky-wrap">
                
                <div className="block-event">
                    <div className="title-center">
                        <strong className="title-event">Nos Evénements</strong>
                    </div>                                                                                    
                    <div className="row wi-12 max-wi-1000 justify-content-center">
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
             
            </div >
        )
    }
}

export default DisplayEvents;
