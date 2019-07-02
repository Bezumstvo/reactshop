import React from 'react';
import { connect } from 'react-redux';
import { ruLang as lang } from "../_constants";
import { filesActions } from "../_actions";

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: null,imagePreviewUrl: ''};
    console.log(this.props.id)
  }

  _handleSubmit(e) {
    e.preventDefault();
      var formData = new FormData();
      var d = document.getElementsByName("file")

      formData.append("uploadImg", this.state.file, this.state.file.name);
      formData.append("_id", this.props.id);
      this.props.upload(formData);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">{lang.SELECT_IMAGE_FOR_PREVIEW}</div>);
    }
    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput"
            type="file" name="file"
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="imageUpload submitButton"  key={this.state.file}
            type="submit" style={{display: (this.state.file===null) ? "none" : "inline" }}
            onClick={(e)=>this._handleSubmit(e)}>{lang.UPLOAD_IMAGE}</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => {
  const { authentication } = state;
  const { user } = authentication;
  return {
   user
  }
}
const mapDispatchToProps = dispatch => ({
  upload: params => dispatch(filesActions.upload(params)),
  });
  const connectedImageUpload = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ImageUpload);
export { connectedImageUpload as ImageUpload };
