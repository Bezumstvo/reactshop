import React from 'react';
import { connect } from 'react-redux';
import logo from '../../public/logo.png'
import { ruLang as lang } from "../_constants";

const Logout = (param) => {
 if (param.login) {
return (
  <div>
    <a href="/login" style={{textAlign:'right', color:'white'}}>{lang.MENU_EXIT}</a>
  </div>
)}else {
  return null;
}
}

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
                <a href="/category">{lang.MENU_CATEGORY}</a>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <a href="/product">{lang.MENU_PRODUCT}</a>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <a href="/delivery">{lang.MENU_DELIVERY}</a>
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
