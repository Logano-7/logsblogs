import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Log = () => {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Log</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Published
          </span>
          <input type="file" style={{ display: "none" }} id="file" />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save Draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="webDev" id="webDev" />
            <label htmlFor="webDev">Web Dev</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="technology" id="technology" />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="science" id="science" />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="sports" id="sports" />
            <label htmlFor="sports">Sports</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="food" id="food" />
            <label htmlFor="food">Food</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="movies" id="movies" />
            <label htmlFor="movies">Movies</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Log;
