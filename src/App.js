import { TextEditor } from "./components/editor";
import { Title } from "./components/title";
import "./App.css"
import { SaveBtn } from "./components/saveBtn";

function App() {
  return (
    <div className="app-wrapper">
      <div className="header-wrapper">
        <Title />
        <SaveBtn />
      </div>

      <div>
        <TextEditor />
      </div>

    </div>
  );
}

export default App;
