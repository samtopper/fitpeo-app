import { Title } from "./components/title";
import { List } from "./components/list";
import { Header } from "./components/header";
import { Profile } from "./components/profile/profile";

import "./App.css";
import { Cards } from "./components/cards";
import { useState } from "react";
import BarChart from "./components/barChart";

function App() {
  const [view, setView] = useState("dashboard");
  const handleClick = (itemName) => {
    console.log("handle click event", itemName);
    setView(itemName);
  };

  return (
    <div className="container">
      <div className="navigationSection">
        <Title />
        <List handleClick={handleClick} />
        <Profile />
      </div>

      <div className="viewSection">
        <Header username="John Doe" />
        {view === "dashboard" ? (
          <>
            <Cards />
            <div>overview section</div>
            <BarChart />
          </>
        ) : (
          <div>Page is under development</div>
        )}
      </div>
    </div>
  );
}

export default App;
