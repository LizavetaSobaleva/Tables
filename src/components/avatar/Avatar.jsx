import PropTypes from "prop-types";
import "./avatar.css";

const Avatar = ({ imageUrl, fullName, size = 36 }) => {
  const getInitials = (name) => {
    if (!name) return "NN";
    const nameParts = name.split(" ");
    const initials =
      nameParts.length > 1
        ? nameParts[0][0] + nameParts[1][0]
        : nameParts[0][0];
    return initials.toUpperCase();
  };

  return (
    <div
      className="avatar"
      style={{
        width: size,
        height: size,
        fontSize: size / 2.5,
        lineHeight: `${size}px`,
      }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={fullName || "User Avatar"}
          className="avatarImage"
        />
      ) : (
        <span className="avatarInitials">{getInitials(fullName)}</span>
      )}
    </div>
  );
};

Avatar.propTypes = {
  imageUrl: PropTypes.string,
  fullName: PropTypes.string,
  size: PropTypes.number,
};

export default Avatar;
