import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { categoriesActions } from "../../_actions";

import MaterialTable from 'material-table';

//import V0MuiThemeProvider from "material-ui";

import logo from "./logo.svg";
import "./App.css";
import { Form } from "../ControlPage";
import TableCategories from "./TableCategories";
/*
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
*/
class ControlPage extends React.Component {
  constructor() {
    super();
    this.state = {
      editIdx: -1,
/*      columns: [
      { title: "name", field:"name" },
      { title: "description", field: "description" }
    ],
    data: []
    */
  };
    this.onSubmit = this.onSubmit.bind(this);
    this.startEditing = this.startEditing.bind(this);
    this.stopEditing = this.stopEditing.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(id) {
    var idJson = { id: id };
    this.props.remove(idJson);
  }

  startEditing(i) {
    this.setState({ editIdx: i });
  }

  stopEditing() {
    this.setState({ editIdx: -1 });
  }

  onSubmit(event) {
    this.props.add({ name: this.state.name, description: this.state.desc });
    event.preventDefault();
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
      { title: "name", field:"name" },
      { title: "description", field: "description" }
    ];

    return (
      <div>
        <div className="App">
          <Form />
            {categories && <MaterialTable
            title="Categories"
            columns={headRows}
            data={categories}
            editable={{
              onRowAdd: newData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    const data = [...state.data];
                    data.push(newData);
                    setState({ ...state, data });
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    const data = [...state.data];
                    data[data.indexOf(oldData)] = newData;
                    setState({ ...state, data });
                  }, 600);
                }),
              onRowDelete: oldData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    const data = [...state.data];
                    data.splice(data.indexOf(oldData), 1);
                    setState({ ...state, data });
                  }, 600);
                }),
            }}
          />}
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
