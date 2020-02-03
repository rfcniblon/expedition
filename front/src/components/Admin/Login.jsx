import React from "react";
import './Login.css';
const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleChange = event => {
        switch (event.target.name) {
            case 'username':
                this.setState({ username: event.target.value });
                break;
            case 'password':
                this.setState({ password: event.target.value });
                break;
            default:
                break;
        }
    };

    handleFormSubmit = () => {
        const { username, password } = this.state;

        fetch(SERVER_ADDRESS + '/api/login', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({ name: username, password: password }),
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return res.text().then(text => {
                        throw new Error(text);
                    });
                }
            })
            .then(data => {
                localStorage.setItem('token', data.token);
                this.props.updateFunction();
            })
            .catch(err => {
                alert(err.message);
            });
    };

    render() {
        const { username, password } = this.state;
        return (
            <div className="sticky-wrap">
              
                <div className="block-login">


                    <form className="block-form-login">
                        <div className="center-connexion"><strong>Connexion administrateur</strong></div>
                        <label className="label-login">

                            <div className="form-group size-input">
                                <div className="input-group">

                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Username:</div>
                                    </div>

                                    <input className="form-control" name="username" value={username} onChange={this.handleChange} />
                                </div>

                            </div>

                        </label>
                        <label className="label-login">

                            <div className="form-group size-input">
                                <div className="input-group">

                                    <div className="input-group-prepend">
                                        <div className="input-group-text" >Password:</div>
                                    </div>

                                    <input className="form-control" type="password" name="password" value={password} onChange={this.handleChange} />
                                </div>

                            </div>

                        </label>
                        <div className="d-block text-center pb-4">
                            <button className="btn btn-primary button-login" type="button" onClick={this.handleFormSubmit}>Se connecter</button>
                        </div>
                    </form>

                </div>
                <div className="sticky-footer">
                   
                </div>
            </div>
        );
    }
}

export default Login;
