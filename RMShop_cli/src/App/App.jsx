import React from "react";
import { Router, Redirect, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";

import { Header, Menu, ControlMenu } from "../_components";
import { RegistrationPage } from "../pages/RegistrationPage";
import { LoginPage } from "../pages/LoginPage";
import { AccountPage } from "../pages/AccountPage";
import { HomePage } from "../pages/HomePage";
import { ER404Page } from "../pages/ER404Page";
import { CategoriesPage, CategoryPage } from "../pages/CategoryPage";
import { ProductPage } from "../pages/ProductPage";
import { DeliveryPage } from "../pages/DeliveryPage";
import { ControlPage, ControlCategoriesPage, ControlDepartmentsPage, ControlProductsPage} from "../pages/ControlPage";

class SwitchControl extends React.Component {
  render() {
    return(
      <Switch>
        <PrivateRoute path="/control/departments" component={ControlDepartmentsPage} />
        <PrivateRoute path="/control/categories" component={ControlCategoriesPage} />
        <PrivateRoute path="/control/products" component={ControlProductsPage} />
        <Redirect from='*' to='/404' />
      </Switch>
    )
  }
}

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
          <div className="jumbotron">
          <div className="container-fluid">
            <div className="col-sm-12 col-sm-offset-0">
              {alert.message && (
                <div className={`alert ${alert.type}`}>{alert.message}</div>
              )}
              <Router history={history}>
              <React.Fragment>
                <Route path="/" component={()=><Menu/>} />
                <Route path="/" component={()=><ControlMenu/>} />
                <div className="clean"></div>
                <Switch>
                  <Route exact path="/" component={()=><HomePage/>} />
                  <Route path="/login" component={()=><LoginPage/>} />
                  <Route path="/registration" component={()=><RegistrationPage/>} />
                  <Route exact path="/categories" component={()=><CategoriesPage/>} />
                  <Route exact path="/products" component={()=><CategoryPage/>} />
                  <Route path="/products/:id" component={ProductPage} />
                  <Route path="/delivery" component={()=><DeliveryPage/>} />

                  <PrivateRoute exact path="/control" component={ControlPage} />

                  <PrivateRoute path="/control/:part" component={SwitchControl} />
                  <PrivateRoute path="/account" component={AccountPage} />
                  <Route path='/404' component={()=><ER404Page/>} />
                  <Redirect from='*' to='/404' />
                </Switch>
              </React.Fragment>
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
