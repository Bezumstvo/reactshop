import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { departmentsActions } from "../../_actions";
import { ruLang as lang, table_localization as localization } from "../../_constants";
import MaterialTable from 'material-table';

class ControlDepartmentsPage extends React.Component {
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
    var departments;
    var { datadepartments } = this.props;
    try {
      departments = datadepartments.items;
    } catch (e) {
      console.log(e);
    }

    const headRows = [
      { title: "name", field:"name" },
      { title: "description", field: "description" }
    ];

    return (
      <div>
            {departments &&

            <MaterialTable
            localization={localization}
            title={lang.TITLE_DEPARTMENTS}
            columns={headRows}
            data={departments}
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
    );
  }
}

const mapStateToProps = store => {
  const { datadepartments, authentication } = store;
  const { user } = authentication;
  return {
    user,
    datadepartments
  };
};
const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(departmentsActions.getAll()),
  add: params => dispatch(departmentsActions.add(params)),
  update: params => dispatch(departmentsActions.update(params)),
  remove: params => dispatch(departmentsActions.remove(params))
});
const connectedControlDepartmentsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlDepartmentsPage);
export { connectedControlDepartmentsPage as ControlDepartmentsPage };
