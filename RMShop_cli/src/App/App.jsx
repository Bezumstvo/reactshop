import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";

import { Header } from "../_components/Header";
import { Menu } from "../_components/Menu";
import { RegistrationPage } from "../pages/RegistrationPage";
import { LoginPage } from "../pages/LoginPage";
import { AccountPage } from "../pages/AccountPage";
import { HomePage } from "../pages/HomePage";
import { CategoryPage } from "../pages/CategoryPage";
import { ProductPage } from "../pages/ProductPage";
import { DeliveryPage } from "../pages/DeliveryPage";
import { ControlPage } from "../pages/ControlPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div>
        <Header />
        <Menu />
        <div className="jumbotron">
          <div className="container">
            <div className="col-sm-12 col-sm-offset-0">
              {alert.message && (
                <div className={`alert ${alert.type}`}>{alert.message}</div>
              )}
              <Router history={history}>
                <div>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/registration" component={RegistrationPage} />
                  <Route path="/category" component={CategoryPage} />
                  <Route path="/product" component={ProductPage} />
                  <Route path="/delivery" component={DeliveryPage} />
                  <PrivateRoute path="/control" component={ControlPage} />
                  <PrivateRoute path="/account" component={AccountPage} />
                </div>
              </Router>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
