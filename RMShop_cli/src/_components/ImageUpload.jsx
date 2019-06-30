import React from 'react';
import { connect } from 'react-redux';
import { ruLang as lang } from "../_constants";
import { filesActions } from "../_actions";

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
      var formData = new FormData();
      formData.append('logo', this.state.file);
      var objArr = [];
      objArr.push({"id": '3', "name": 'userName'});
      //JSON obj
      formData.append('objArr', JSON.stringify( objArr ));
/*          {
              url: url,
              type:"POST",
              processData:false,
              contentType: false,
              data: formData,
      	    	complete: function(data){
              alert("success");
              }
            }
            */
    this.props.upload(formData);
    // TODO: do something with -> this.state.file
    console.log('handle uploading-',formData);
    formData
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
            type="file"
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="imageUpload submitButton"
            type="submit"
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
