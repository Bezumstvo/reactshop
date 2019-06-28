import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {categoriesActions} from '../../_actions';

class HomePage extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getAll();
  }

  render() {
      var categories
      var { datacategories } = this.props
       try { categories = (datacategories.items)
       }catch(e) { console.log(e); }

        return (
          <div key={datacategories.loading}>
          {datacategories.loading && <em>Загрузка зданий...</em>}
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
  const { datacategories, authentication } = store;
  const { user } = authentication;
  return {
    user,
    datacategories
  }
}
const mapDispatchToProps = dispatch => ({
  getAll: c => dispatch(categoriesActions.getAll(c)),
})
const connectedHomePage = connect(mapStateToProps,mapDispatchToProps)(HomePage);
export { connectedHomePage as HomePage };
