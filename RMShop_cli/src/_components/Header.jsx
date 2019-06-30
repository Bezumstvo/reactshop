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

class Header extends React.Component {
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
          <div className="block-shop-1 col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="right-white col-xs-4 col-sm-4 col-md-4 col-lg-4">
                 <a href="/"><img src={logo} className="header-image" /></a>
              </div>
              <div className="center-white col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <p>{lang.SITE_NAME}</p>
              </div>
              <div className="right-white col-xs-4 col-sm-4 col-md-4 col-lg-4">
                 {(login) ? lang.YOU_LOGIN_AS +  this.props.user.login    : lang.HELLO_GUEST}
                  <Logout login={login} />
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

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };
