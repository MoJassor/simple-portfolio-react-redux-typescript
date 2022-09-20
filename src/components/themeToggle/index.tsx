import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { flip, selectActiveTheme, selectTheme } from "../../features/theme";

import "./style.css";
const ThemeToggle = () => {
  const theme = useAppSelector(selectTheme);
  const activeTheme = useAppSelector(selectActiveTheme);
  const dispatch = useAppDispatch();
  return (
    <div className="nav_ac">
      <div
        role="button"
        className="toggleBtn"
        onClick={() => {
          dispatch(flip());
        }}
      >
        {activeTheme === "dark" ? (
          <i
            className="bi bi-brightness-high"
            style={{ color: theme.color }}
          ></i>
        ) : (
          <i className="bi bi-brightness-high-fill"></i>
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
