import { TextEditor } from "./components/editor";
import { Title } from "./components/title";
import "./App.css"
import { SaveBtn } from "./components/saveBtn";
import { EditorState, convertFromRaw } from "draft-js";
import { useEffect, useState } from "react";

function App() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const rawContent = localStorage.getItem("savedContent");
    if (rawContent) {
      setEditorState(EditorState.createWithContent(
        convertFromRaw(JSON.parse(rawContent))
      ));
    }
  }, [])
  return (
    <div className="app-wrapper">
      <div className="header-wrapper">
        <Title />
        <SaveBtn
          editorState={editorState}
        />
      </div>

      <div>
        <TextEditor
          editorState={editorState}
          setEditorState={setEditorState}
        />
      </div>

    </div>
  );
}

export default App;
