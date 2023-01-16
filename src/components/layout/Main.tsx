import classes from "./Main.module.css";

interface PropsType {
  children: React.ReactNode;
}
const Main = (props: PropsType) => {
  return (
    <div className={classes["main-layout"]}>
      <div className={classes["main-container"]}>{props.children}</div>
    </div>
  );
};

export default Main;
