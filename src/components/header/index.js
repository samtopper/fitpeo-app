import "./header.css";

export const Header = (props) => {
  const { username = "John" } = props;
  return (
    <div className="headerContainer">
      <h1>
        <span style={{ fontWeight: "lighter" }}>Hello</span> {username}{" "}
        &#x270C;,
      </h1>
      <div className="searchBox">
        <i>&#128269;</i>
        <input type="search" name="search" placeholder="search"></input>
      </div>
    </div>
  );
};

// &#8250; &#9996;
