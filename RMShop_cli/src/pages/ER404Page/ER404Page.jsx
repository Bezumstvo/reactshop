import React from 'react';
import { connect } from 'react-redux';
import {categoriesActions} from '../../_actions';

class ER404Page extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getAll();
  }

  render() {
      var categories
      var { datatable } = this.props
       try { categories = (datatable.items)
       }catch(e) { console.log(e); }

        return (
          <div>
          <h1>ERROR 404 : Page not found</h1>
          </div>
        )
    }
}

const mapStateToProps = store => {
  const { datatable, authentication } = store;
  const { user } = authentication;
  return {
    user,
    datatable
  }
}
const mapDispatchToProps = dispatch => ({
  getAll: c => dispatch(categoriesActions.getAll(c)),
})
const connectedER404Page = connect(mapStateToProps,mapDispatchToProps)(ER404Page);
export { connectedER404Page as ER404Page };
