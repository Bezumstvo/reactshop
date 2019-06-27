import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { categoriesActions } from "../../_actions";

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
    this.state = { editIdx: -1 };

    this.onSubmit = this.onSubmit.bind(this);
    this.startEditing = this.startEditing.bind(this);
    this.stopEditing = this.stopEditing.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(id) {
    var idJson = { id: id };
    this.props.remove(idJson);
    /*    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
*/
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
      { id: "name", numeric: false, disablePadding: true, label: "имя" },
      {
        id: "description",
        numeric: false,
        disablePadding: false,
        label: "описание"
      }
    ];
    return (
      <div>
        <div className="App">
          <Form />
          {categories && (
            <TableCategories
              data={categories}
              header={headRows}
              handleRemove={this.handleRemove}
              startEditing={this.startEditing}
              editIdx={this.state.editIdx}
              stopEditing={this.stopEditing}
              handleChange={this.handleChange}
            />
          )}
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

/*
<table key={datatable.loading} style={{ border: "1px solid grey" }}>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    {categories &&
      categories.map((cat, index) => (
        <tr id={cat.id} key={index + 1}>
          <td>{cat.name}</td>
          <td>{cat.description}</td>
          <td>
            <Link to="#" id={cat._id} onClick={this.onRemove}>
              X
            </Link>
          </td>
        </tr>
      ))}
  </tbody>
</table>
*/

/*
{categories && (
  <Table
    handleRemove={this.handleRemove}
    startEditing={this.startEditing}
    editIdx={this.state.editIdx}
    stopEditing={this.stopEditing}
    handleChange={this.handleChange}
    data={categories}
    header={[
      {
        name: "Name",
        prop: "name"
      },
      {
        name: "Description",
        prop: "description"
      }
    ]}
  />
)}

*/
