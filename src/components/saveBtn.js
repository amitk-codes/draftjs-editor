import React from 'react';
import "../stylesheets/saveBtn.css"
import { convertToRaw } from 'draft-js';

export const SaveBtn = ({editorState}) => {
  const saveHandler = () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    localStorage.setItem(
      "savedContent",
      JSON.stringify(rawContent)
    );
  }
  return (
    <div className='save-button-div'>
      <button className='save-button' onClick={saveHandler}>Save</button>
    </div>
  )
}