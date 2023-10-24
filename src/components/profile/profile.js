import "./profile.css";

export const Profile = (props) => {
  return (
    <div className="profileContainer">
      <img
        className="profileImg"
        src="ceo.jpg"
        widtj="30px"
        height="30px"
        alt="profile-avatar"
      ></img>
      <p className="profileName1">Evana</p>
      <p className="profileName">project manager</p>
      <img src="downArrow.jpg" alt="" className="arrow" />
      {/* <button>click me</button>; */}
    </div>
  );
};
