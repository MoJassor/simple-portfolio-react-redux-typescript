import NavLinkItem from "../components/navLink";
import styles from "./Nav.module.css";
import ThemeToggle from "../components/themeToggle";
import { useAppSelector } from "../app/hooks";
import { selectTheme } from "../features/theme";
const Nav = () => {
  const theme = useAppSelector(selectTheme);
  return (
    <header style={{ backgroundColor: theme.backgroundColor }}>
      <nav>
        <div className={styles.header}>
          <NavLinkItem path="/" isIcon={true} icon="bi bi-house-fill" />
          <NavLinkItem path="/about" isIcon={false} content="About" />
          <NavLinkItem path="/work" isIcon={false} content="Work" />
          <NavLinkItem path="/project" isIcon={false} content="projects" />
          <NavLinkItem path="/contact" isIcon={false} content="Contact" />
        </div>
        <div style={{ display: "flex" }}>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
