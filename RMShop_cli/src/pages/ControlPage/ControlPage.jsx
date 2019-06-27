import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { categoriesActions } from "../../_actions";

import MaterialTable from 'material-table';

import logo from "./logo.svg";
import "./App.css";
import { Form } from "../ControlPage";

class ControlPage extends React.Component {
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
  }

  render() {
    var categories;
    var { datatable } = this.props;
    try {
      categories = datatable.items;
    } catch (e) {
      console.log(e);
    }

    const headRows = [
      { title: "name", field:"name" , onRowDataChange: ''},
      { title: "description", field: "description" , onRowDataChange: ''}
    ];

    return (
      <div>
        <div className="App">
          <Form />
            {categories &&

            <MaterialTable
            title="categories"
            columns={headRows}
            data={categories}
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
                    console.log(oldData)
                this.handleRemove(oldData._id)
                  }, 600);
                }),

            }}
          />
        }
        </div>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = store => {
  const { datatable, authentication } = store;
  const { user } = authentication;
  return {
    user,
    datatable
  };
};
const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(categoriesActions.getAll()),
  add: params => dispatch(categoriesActions.add(params)),
  update: params => dispatch(categoriesActions.update(params)),
  remove: params => dispatch(categoriesActions.remove(params))
});
const connectedControlPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPage);
export { connectedControlPage as ControlPage };
