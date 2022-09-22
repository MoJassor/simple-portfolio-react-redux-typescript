import { useAppSelector } from "../app/hooks";
import { selectTheme } from "../features/theme";
import styles from "./SectionTitle.module.css";
const SectionTitle = (props: { title: string }) => {
  const theme = useAppSelector(selectTheme);
  return (
    <div className={styles.SectionTitle} style={{ color: theme.color }}>
      {props.title}
    </div>
  );
};
export default SectionTitle;
