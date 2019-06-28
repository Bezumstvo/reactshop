import React from 'react';
import { connect } from 'react-redux';
import logo from '../../public/logo.png'
import { ruLang as lang   } from "../_constants";

const Logout = (param) => {
 if (param.login) {
return (
  <div>
    <a href="/login" style={{textAlign:'right', color:'white'}}>exit</a>
  </div>
)}else {
  return null;
}
}

class ControlMenu extends React.Component {
    render() {
      localStorage.getItem('user').role;
      var show = false;
      if (localStorage.getItem('user')) {
        var user = JSON.parse(localStorage.getItem('user'));
        if (user.role === 1) { show = true; }
      }
        return (
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          {show &&
            <React.Fragment>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <a href="/control-departments">{lang.LINK_DEPARTMENTS}</a>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <a href="/control-categories">{lang.LINK_CATEGORIES}</a>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <a href="/control-products">{lang.LINK_PRODUCTS}</a>
              </div>
              </React.Fragment>
        }
        </div>
        );
    }
}

const mapStateToProps = state => {
  const { authentication } = state;
  const { user } = authentication;
  return {
   user
  }
}

const connectedControlMenu = connect(mapStateToProps)(ControlMenu);
export { connectedControlMenu as ControlMenu };
