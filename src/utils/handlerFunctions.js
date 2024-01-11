import { EditorState, Modifier, RichUtils } from "draft-js";

export const functionalityHandler = (functionality, blockText, contentState, editorState, selectionState, setEditorState) => {
  const { styleType, toggleType } = functionality

  const contentStateWithoutHash = Modifier.replaceText(
    contentState,
    selectionState.merge({
      anchorOffset: 0,
      focusOffset: blockText.length,
    }),
    ''
  );

  const newEditorState = EditorState.push(
    editorState,
    contentStateWithoutHash,
    'remove-range'
  );

  const finalEditorState = RichUtils[toggleType](newEditorState, styleType);

  setEditorState(finalEditorState);

}