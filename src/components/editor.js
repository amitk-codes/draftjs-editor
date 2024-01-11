import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

export const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onChangeHandler = (newEditorState) => setEditorState(newEditorState)


  return (
    <div>
      <Editor
        editorState={editorState}
        onChange={onChangeHandler}
      />
    </div>
  );
};

