import React from 'react';
import { connect } from 'react-redux';
import { ruLang as lang } from "../_constants";

class ShopGrid extends React.Component {
    render() {
      console.log(this.props.data)
      const array = this.props.data;
      var columns = Math.round(12 / this.props.columns);
        return (
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {this.props.data &&
              array.map((element, index) =>
               <div className={'shop-grid col-md-'+columns}  key={element._id}>
                 <h4>{element.name}</h4>
                 <p>{element.description}</p>
               </div>
               )}
          </div>
        );
    }
}


export { ShopGrid as ShopGrid };
