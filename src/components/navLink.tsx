import { NavLink } from "react-router-dom";
import "./NavLink.css";

const NavLinkItem = (props: {
  path: string;
  isIcon: boolean;
  icon?: string;
  content?: string;
}) => {
  return (
    <div className="nav_ac" style={{ padding: "8px" }}>
      <NavLink to={props.path}>
        {props.isIcon ? <i className={props.icon}></i> : props.content}
      </NavLink>
    </div>
  );
};
export default NavLinkItem;
