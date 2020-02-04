import React, { Component } from 'react';
import './Emplacement.css'

class Emplacement extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="fond">
                <div className="fond1">
                    <table className="table" >
                        <thead>
                            <tr>
                                <td></td>
                                <th>Suspendu au plafond</th>
                                <th>Sur un pied</th>
                                <th>Allongé par terre</th>
                                <th>Place debout</th>
                                <th>Nombre plasse assise</th>
                                <th>Prix</th>
                                <th>JE VALIDE ES PAIE DE SUITE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>La sextape de DARWIN</th>
                                <td><input className="checkbox" type="checkbox" id="checkbox" /></td>
                                <td><input className="checkbox" type="checkbox" id="checkbox" /></td>
                                <td><input className="checkbox" type="checkbox" id="checkbox" /></td>
                                <td><input className="checkbox" type="checkbox" id="checkbox" /></td>
                                <td><select name="select" id="">
                                    <option value=""></option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select></td>
                              <td>15€</td>  
                               <td> <input type="button" value="valider" type="submit" className="bouton_tableau" /></td>
                          
                            </tr>
                            <tr>
                                <th>Pour un oui pour un non</th>
                                <td><input className="checkbox" type="checkbox" id="checkbox" /></td>
                                <td><input className="checkbox" type="checkbox" id="checkbox" /></td>
                                <td><input className="checkbox" type="checkbox" id="checkbox" /></td>
                                <td><input className="checkbox" type="checkbox" id="checkbox" /></td>
                                <td><select name="select" id="">
                                    <option value=""></option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select></td>
                                <td>15€</td>  
                                <td> <input type="button" value="valider" type="submit" className="bouton_tableau" /></td>
                            </tr>
                            <tr>
                                <th>Les festivales de bitche</th>
                                <td><input className="checkbox" type="checkbox" id="checkbox" /></td>
                                <td><input className="checkbox" type="checkbox" id="checkbox" /></td>
                                <td><input className="checkbox" type="checkbox" id="checkbox" /></td>
                                <td><input className="checkbox" type="checkbox" id="checkbox" /></td>
                                <td><select name="select" id="">
                                    <option value=""></option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select></td>
                                <td>15€</td>  
                                <td> <input type="button" value="valider" type="submit" className="bouton_tableau" /></td>
                            </tr>
                            <tr>
                                <th>Lucienne et les garcons</th>
                                <td><input className="checkbox" type="checkbox" id="checkbox" /></td>
                                <td><input className="checkbox" type="checkbox" id="checkbox" /></td>
                                <td><input className="checkbox" type="checkbox" id="checkbox" /></td>
                                <td><input className="checkbox" type="checkbox" id="checkbox" /></td>
                                <td><select name="select" id="">
                                    <option value=""></option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select></td>
                                <td>15€</td>  
                                <td> <input type="button" value="valider" type="submit" className="bouton_tableau" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Emplacement;