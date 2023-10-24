// import { useState } from "react";
import "./list.css";

import dashboardImg from "../../images/dashboard.jpg";
// import dashboardImg from "../../images/dashboard.jpg";
// import dashboardImg from "../../images/dashboard.jpg";
// import dashboardImg from "../../images/dashboard.jpg";
// import dashboardImg from "../../images/dashboard.jpg";
// import dashboardImg from "../../images/dashboard.jpg";

const listData = [
  { name: "Dashboard", iconUrl: { dashboardImg } },
  { name: "Product", iconUrl: "" },
  { name: "Customers", iconUrl: "" },
  { name: "Income", iconUrl: "" },
  { name: "Promote", iconUrl: "" },
  { name: "Help", iconUrl: "" },
];
export const List = (props) => {
  const { handleClick } = props;

  return (
    <div className="listContainer">
      <ul>
        {listData.map((item, index) => {
          return (
            <li
              key={index}
              className="listItem"
              onClick={() => handleClick(item.name.toLowerCase())}
            >
              <img
                className="dashboardImg"
                style={{ width: "20px" }}
                src={item.iconUrl}
                alt="dashboard"
              ></img>
              <p>{item.name}</p>

              <img src="option.jpg" alt="right arrow" className="option" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
