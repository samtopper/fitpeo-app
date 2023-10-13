import { Title } from "./components/title";
import { List } from "./components/list";
import "./App.css";
function App() {
  return (
    <div className="container">
      <div className="navigationSection">
        <Title />

        <List />
      </div>

      <div className="viewSection">
        <div>header</div>
        <div>view</div>
      </div>
    </div>
  );
}

export default App;
