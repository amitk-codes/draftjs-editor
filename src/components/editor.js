import React, { useState } from 'react';
import { Editor, EditorState, Modifier, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import "../stylesheets/editor.css"
import { customMappedStyle, functionalityObj } from '../utils/constants';
import { functionalityHandler } from '../utils/handlerFunctions';
export const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onChangeHandler = (newEditorState) => setEditorState(newEditorState)

  const handleBeforeInput = (char, editorState) => {
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();

    if (char === ' ') {
      const blockKey = selectionState.getStartKey();
      const blockText = contentState.getBlockForKey(blockKey).getText();

      const functionality = functionalityObj[blockText]

      if (functionality) {
        functionalityHandler(functionality, blockText, contentState, editorState, selectionState, setEditorState)
        return 'handled';
      }
    }

    return 'not-handled';
  };


  return (
    <div className='editor-div'>
      <Editor
        editorState={editorState}
        onChange={onChangeHandler}
        handleBeforeInput={handleBeforeInput}
        customStyleMap={customMappedStyle}
      />
    </div>
  );
};

