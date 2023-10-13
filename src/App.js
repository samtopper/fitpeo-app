import { Title } from "./components/title";
import { List } from "./components/list";
import { Header } from "./components/header";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="navigationSection">
        <Title />
        <List />
      </div>

      <div className="viewSection">
        <Header username="John Doe" />
        {/* <div>view cards</div> */}
      </div>
    </div>
  );
}

export default App;
