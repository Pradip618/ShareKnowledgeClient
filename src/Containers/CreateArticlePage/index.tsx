import React, { useState } from 'react';
import CKEditor from 'react-ckeditor-component';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { connect } from 'react-redux';
import { webUrl } from '../../Constants';
import { setOneValue, clearAllValue } from '../../actions/createArticle';
import Navbar from '../../Components/NavBar';

const CreateArticle = (props: {
  setOneValue?: Function;
  clearAllValue?: Function;
  title?: string;
  description?: string;
  image?: any;
}) => {
  const [thumbnail, setThumbnail] = useState(null);

  const handleChange = (name: string) => (e: { target: { value: any } }) => {
    props.setOneValue({ key: name, value: e.target.value });
  };

  const handleDrop = (files: any[]): void => {
    const file = files[0];
    props.setOneValue({ key: 'image', value: file });
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setThumbnail(reader.result);
    });

    reader.readAsDataURL(file);
  };

  const handleCancel = () => {
    props.clearAllValue();
  };

  const handleSubmit = () => {
    const { title, description, image } = props;
    const formData = new FormData();

    formData.set('title', title);
    formData.set('description', description);
    formData.append('file', image);
    // axios
    //   .post(`${webUrl}article/post`, formData, {
    //     headers: {
    //       'content-type': 'multipart/form-data',
    //     },
    //   })
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    axios({
      method: 'post',
      url: `${webUrl}article/post`,
      data: formData,
      headers: {
        Accept: 'application/json',

        'Content-Type': 'multipart/form-data',
      },
    })
      .then(function(response) {
        //handle success
        console.log(response);
      })
      .catch(function(response) {
        //handle error
        console.log(response);
      });
  };

  const onEditorChange = (evt: { editor: { getData: () => any } }) => {
    var newContent = evt.editor.getData();
    props.setOneValue({ key: 'description', value: newContent });
    // this.setState({
    //   content: newContent,
    // });
  };

  const { title, description } = props;

  const dropzoneStyle = {
    height: 100,
    // width: 80,
    background: 'silver',
    marginHorizontal: 12,
    cursor: 'pointer',
  };
  return (
    <>
      <Navbar />
      <div className="create-article-container">
        <div className="article-field-wrapper-input">
          <input placeholder="Title" value={title} onChange={handleChange('title')} />
          <div className="write-article-ckEditor">
            <CKEditor
              activeClass="p10"
              content={description}
              events={{
                //   "blur": this.onBlur,
                //   "afterPaste": this.afterPaste,
                change: onEditorChange,
              }}
              // UploadAdapter={FileRepository}
            />
          </div>
          <input placeholder="Add a tag" />
          <div
            style={{
              width: 120,
              height: 120,
              margin: '8px 12px',
            }}>
            <Dropzone onDrop={handleDrop}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {thumbnail ? (
                      <img src={thumbnail} style={{ height: 100, width: 100 }} />
                    ) : (
                      <div style={dropzoneStyle} />
                    )}
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div>
            <button className="article-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button className="article-submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
        <div className="article-field-wrapper-display">
          {thumbnail && <img src={thumbnail} style={{ height: 150, width: '100%' }} />}
          <div>{title}</div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: {
  CreateArticle: { title: any; description: any; image: any };
}) => ({
  title: state.CreateArticle.title,
  description: state.CreateArticle.description,
  image: state.CreateArticle.image,
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; payload?: any }) => any) => ({
  setOneValue: (value: any) => dispatch(setOneValue(value)),
  clearAllValue: () => dispatch(clearAllValue()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
