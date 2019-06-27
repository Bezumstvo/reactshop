import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {categoriesActions} from '../../_actions';

class DeliveryPage extends React.Component {
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
          <div key={datatable.loading}>
          {datatable.loading && <em>Загрузка зданий...</em>}
            {categories &&
               categories.map((cat, index) =>
                <div id={cat.id} key={index+1} style={{display: 'block', border:'1px solid blue', float:'left', width:'300px'}}>
                  <p>{cat.name}</p><p>{cat.description}</p>
                </div>
                )}
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
const connectedDeliveryPage = connect(mapStateToProps,mapDispatchToProps)(DeliveryPage);
export { connectedDeliveryPage as DeliveryPage };
