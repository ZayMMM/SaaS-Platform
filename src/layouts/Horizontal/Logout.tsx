import { Link, useLocation } from "react-router-dom";
import LogoutImage from "../../assets/images/logout.png";

const Logout = () => {
  return (
    <>
      <li className="menu-item">
        <Link
          to={""}
          target={""}
          className="menu-link"
          data-menu-key={"logout"}
        >
          <span className="menu-text" style={{ color: "#F97E7E" }}>
            {" "}
            Logout{" "}
          </span>
          <img src={LogoutImage} alt="Logout" />
        </Link>
      </li>
    </>
  );
};

export default Logout;
