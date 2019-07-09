import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ruLang as lang } from "../_constants";


class Menu extends React.Component {
    render() {
      var loginDiv = '';
      var login = false;
      try{
        if (this.props.user) {
          const { user } = this.props
          login = true;
        } else {
          login = false;
          }
      }catch(e) {console.log(e)}
        return (
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <Link to="/categories">{lang.MENU_CATEGORY}</Link>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <Link to="/products">{lang.MENU_PRODUCT}</Link>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <Link to="/delivery">{lang.MENU_DELIVERY}</Link>
              </div>
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

const connectedMenu = connect(mapStateToProps)(Menu);
export { connectedMenu as Menu };
