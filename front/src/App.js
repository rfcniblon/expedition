import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Evenement from "./components/Evenement/Evenement";
import Login from './components/Admin/Login';
import Navbar from './components/Navbar/Navbar'
import Panier from './components/Panier/Panier';
import AdminPage from './components/Admin/AdminPage';
import Contact from "./components/Contact/Contact";
import Dashboard from "./components/Dashboard/Dashboard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      redirectToAdminPage: false,
    };
  }

  // fonction pour mettre à jour isLogged et redirectToAdminPage dans le state de App.js,
  // cette fonction est passée en props au composant LoginPage pour que ce même composant puisse déclencher cette fonction
  updateLogin = () => {
    this.setState({
      isLogged: true,
      redirectToAdminPage: true
    });

  };

  render() {
    const { isLogged, redirectToAdminPage } = this.state;
    return (
      <>
        {redirectToAdminPage && <Redirect to="/admin" />}
        <Navbar />
        <Switch>
          <Route exact path="/panier" component={Panier} /> 
          <Route path="/evenement" component={Evenement} /> 
          <Route path="/contact" component={Contact} />
          <Route path="/admin" component={AdminPage} />
          {/* <Route path="/admin" component={AdminPage} /> */}
          {/* <Route exact path="/login" component={() => <Login updateFunction={this.updateLogin} />} /> */}
         {/* {isLogged ? <Route exact path="/admin" component={AdminPage} /> : <Redirect to="/" />} */} */}
        </Switch>
      </>
    )
  }
}

export default App;
