import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { categoriesActions } from "../../_actions";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      nameError: "",
      description: "",
      descriptionError: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  change(e) {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validate() {
    let isError = false;
    const errors = {
      nameError: "",
      descriptionError: ""
    };

    if (this.state.name.length < 5) {
      isError = true;
      errors.nameError = "Username needs to be atleast 5 characters long";
    }
    /*
    if (this.state.description.indexOf("@") === -1) {
      isError = true;
      errors.descriptionError = "Requires valid email";
    }
*/
    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  }

  onSubmit(e) {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.add({
        name: this.state.name,
        description: this.state.description
      });

      // clear form
      this.setState({
        name: "",
        nameError: "",
        description: "",
        descriptionError: ""
      });
    }
  }

  render() {
    return (
      <form>
        <TextField
          name="name"
          label="name"
          value={this.state.name}
          onChange={e => this.change(e)}
          error={this.state.nameError.length > 0 ? true : false}
        />
        <br />
        <TextField
          name="description"
          label="description"
          value={this.state.description}
          onChange={e => this.change(e)}
          error={this.state.descriptionError.length > 0 ? true : false}
        />
        <br />
        <Button
          variant="outlined"
          color="primary"
          label="Submit"
          onClick={e => this.onSubmit(e)}
        >
          Add
        </Button>
      </form>
    );
  }
}
const mapStateToProps = store => {
  const { authentication } = store;
  const { user } = authentication;
  return {
    user
  };
};
const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(categoriesActions.getAll()),
  add: params => dispatch(categoriesActions.add(params))
});
const connectedForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
export { connectedForm as Form };
