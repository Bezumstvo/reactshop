import React from 'react';
import { connect } from 'react-redux';
import logo from '../../public/logo.png'

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
                <a href="/category">Категория</a>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <a href="/product">Продукт</a>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <a href="/delivery">Доставка</a>
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
