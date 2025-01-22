import Avatar from "../avatar/Avatar";
import "./navbar.css";

const user = {
  imageUrl: null,
  fullName: "John Doe",
};

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLogo">Logo</div>
      <div className="navbarMenu">
        <Avatar imageUrl={user.imageUrl} fullName={user.fullName} />
      </div>
    </div>
  );
};

export default Navbar;
