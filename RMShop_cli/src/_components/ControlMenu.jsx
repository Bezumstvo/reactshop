import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { ruLang as lang   } from "../_constants";


class ControlMenu extends React.Component {
    render() {
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
              <Link to="/control/departments">{lang.LINK_DEPARTMENTS}</Link>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <Link to="/control/categories">{lang.LINK_CATEGORIES}</Link>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <Link to="/control/products">{lang.LINK_PRODUCTS}</Link>
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
