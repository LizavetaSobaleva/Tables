import Avatar from "../avatar/Avatar";
import "./sidebar.css";

const user = {
  imageUrl: null,
  fullName: "John Doe",
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarMenu">
        <Avatar imageUrl={user.imageUrl} fullName={user.fullName} />
      </div>
    </div>
  );
};

export default Sidebar;
