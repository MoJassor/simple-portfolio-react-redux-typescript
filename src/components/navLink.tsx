import { NavLink } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectTheme } from "../features/theme";
import styles from "./NavLink.module.css";

const NavLinkItem = (props: {
  path: string;
  isIcon: boolean;
  icon?: string;
  content?: string;
}) => {
  const theme = useAppSelector(selectTheme);
  let notActiveStyle = {
    color: theme.color,
    textDecoration: "none",
  };
  let activeStyle = {
    textDecoration: "none",
    color: "#084298",
  };
  return (
    <div className={styles.nav_ac} style={{ padding: "8px" }}>
      <NavLink
        className={styles.link}
        to={props.path}
        style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
      >
        {props.isIcon ? <i className={props.icon}></i> : props.content}
      </NavLink>
    </div>
  );
};
export default NavLinkItem;
