import { EditorState, Modifier, RichUtils } from "draft-js";

const removePrevInlineStyles = (editorState, stylesArr, currentStyle) => {
  let toSendEditorState = editorState

  stylesArr.forEach(style => {
    if(currentStyle !== style) toSendEditorState = RichUtils.toggleInlineStyle(toSendEditorState, style)
  })

  return toSendEditorState
}

const removePrevBlockType = (editorState, currentStyleType) => {
  let toSendEditorState = editorState
  if(currentStyleType !== "header-one" && RichUtils.getCurrentBlockType(editorState) === "header-one"){
    toSendEditorState = RichUtils.toggleBlockType(toSendEditorState, "header-one")
  }
  return toSendEditorState
}

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

  let finalEditorState = RichUtils[toggleType](newEditorState, styleType);
  finalEditorState = removePrevBlockType(finalEditorState, styleType)
  finalEditorState = removePrevInlineStyles(finalEditorState, newEditorState.getCurrentInlineStyle(), blockText)

  setEditorState(finalEditorState);

}