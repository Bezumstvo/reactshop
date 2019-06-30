import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {productsActions} from '../../_actions';

import { ruLang as lang, table_localization as localization } from "../../_constants";
import { ShopGrid } from '../../_components';

class ProductPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getAll();
  }

  render() {
    var products;
    var { dataproducts } = this.props;
    try {
      products = dataproducts.items;
    } catch (e) {
      console.log(e);
    }

    return (
      <div>
        <div className="App">

            {products &&
              <ShopGrid
              data = {products}
              columns = {4}
              />
        }
        </div>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = store => {
  const { dataproducts, authentication } = store;
  const { user } = authentication;
  return {
    user,
    dataproducts
  };
};

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(productsActions.getAll()),
})

const connectedProductPage = connect(mapStateToProps,mapDispatchToProps)(ProductPage);
export { connectedProductPage as ProductPage };
