import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { productsActions, categoriesActions, departmentsActions } from "../../_actions";
import { ruLang as lang, table_localization as localization } from "../../_constants";
import MaterialTable from 'material-table';
import {ImageUpload} from '../../_components';

class ControlProductsPage extends React.Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  onSubmit(event) {
    this.props.add({ name: this.state.name, description: this.state.desc });
    event.preventDefault();
  }
  handleUpdate(values) {
    this.props.update(values);
  }
  handleRemove(id) {
    var idJson = { id: id };
    this.props.remove(idJson);
  }
  componentDidMount() {
    this.props.getAll();
    this.props.getCategoriesAll();
    this.props.getDepartmentsAll();
  }

  render() {
    var products, categories, departments, id_name_cats = {}, id_name_departments = {};
    var { dataproducts, datacategories, datadepartments } = this.props;
    if (dataproducts && datacategories && datadepartments && dataproducts.items && datacategories.items && datadepartments.items) {
      products = dataproducts.items;
      categories = datacategories.items;
      departments = datadepartments.items;

      categories.forEach(function(val) {
              id_name_cats[val._id] = val.name;
      });
      departments.forEach(function(val) {
              id_name_departments[val._id] = val.name;
      });

    }
    const headRows = [
      { title: "name", field:"name" },
      { title: "description", field: "description" },
      { title: "cost", field:"cost" },
      { title: "value", field:"value" },
      { title: "weight", field:"weight" },
      { title: "size", field:"size" },
      { title: "attribute", field:"attribute" },
      { title: "department", field:"department", lookup:id_name_departments },
      { title: "category", field:"category", lookup: id_name_cats },{
        Title: 'image',
        field: '_id',
        render: rowData => <ImageUpload id = {rowData._id}  />
      }
    ];

    return (
      <React.Fragment>
            {products &&

            <MaterialTable
            localization={localization}
            title={lang.TITLE_PRODUCTS}
            columns={headRows}
            data={products}
            editable={{
              onRowAdd: newData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    this.props.add(newData);
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    this.handleUpdate(newData)
                  }, 600);
                }),
              onRowDelete: oldData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    this.handleRemove(oldData._id)
                  }, 600);
                }),

            }}
          />
        }
        </React.Fragment>
    );
  }
}

const mapStateToProps = store => {
  const { dataproducts, datacategories, datadepartments, authentication } = store;
  const { user } = authentication;
  return {
    user,
    dataproducts,
    datacategories,
    datadepartments
  };
};
const mapDispatchToProps = dispatch => ({
  getCategoriesAll: () => dispatch(categoriesActions.getAll()),
  getDepartmentsAll: () => dispatch(departmentsActions.getAll()),
  getAll: () => dispatch(productsActions.getAll()),
  add: params => dispatch(productsActions.add(params)),
  update: params => dispatch(productsActions.update(params)),
  remove: params => dispatch(productsActions.remove(params))
});
const connectedControlProductsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlProductsPage);
export { connectedControlProductsPage as ControlProductsPage };
