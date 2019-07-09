import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {productsActions} from '../../_actions';

import { ruLang as lang, table_localization as localization } from "../../_constants";

class ProductPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (this.props.match && this.props.match.params)
     {
       const prodId = this.props.match.params.id;
       this.props.getById({"id":prodId});
     }
  }

    render() {
      var product = '';
      var { dataproduct } = this.props;
      if (dataproduct && dataproduct.items) {
        product = dataproduct.items[0];
        console.log(product)
      }
      return (
        <React.Fragment>
          {product &&
            <div>
              <img src={'http://127.0.0.1:4000/'+product.image} alt={product.name} />
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>{product.attribut}</p>
              <p>{product.size}</p>
              <p>{product.weight}</p>
            </div>
          }
        </React.Fragment>
      );
    }
  }

const mapStateToProps = store => {
  const { dataproduct, authentication } = store;
  const { user } = authentication;
  return {
    user,
    dataproduct
  };
};

const mapDispatchToProps = dispatch => ({
  getById: (dataproduct) => dispatch(productsActions.getById(dataproduct)),
})

const connectedProductPage = connect(mapStateToProps,mapDispatchToProps)(ProductPage);
export { connectedProductPage as ProductPage };
