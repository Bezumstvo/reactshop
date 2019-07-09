import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ruLang as lang } from "../_constants";

class ProductGrid extends React.Component {
    render() {
      const array = this.props.data;
      var columns = Math.round(12 / this.props.columns);
        return (
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {this.props.data &&
              array.map((element, index) =>
               <div className={'shop-grid col-md-'+columns}  key={element._id}>
                 <h4>{element.name}</h4>
                 <p><Link to={'products/'+element._id}><img src={'http://127.0.0.1:4000/'+element.image} style={{width:"100px"}} /></Link></p>
                 <p>{element.description}</p>
               </div>
               )}
          </div>
        );
    }
}

export { ProductGrid as ProductGrid };
