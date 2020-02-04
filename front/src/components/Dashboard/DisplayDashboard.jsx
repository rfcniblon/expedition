import React from "react";
import Events from "../Evenement/Evenement/Evenement"
const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

class DisplayDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }



    }
    componentDidMount = () => {
        fetch(SERVER_ADDRESS + '/event')
            .then(res => res.json())
            .then(res => this.setState({ events: res }))
    }
    render() {
        return (
            <div className="blabla">
                    <div className="rainbow row wi-12 max-wi-1000 justify-content-center">


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
                        {this.state.events.map((event) => (
                            <Events
                                name={event.name}
                                photo={event.photo}
                                alt={event.alt}
                                artiste={event.artiste}
                                date={event.date}
                                description={event.description}
                                nombre={event.nombre}
                            />
                        ))}
                    </div>
                </div>
               
        );
    }
}

export default DisplayDashboard;