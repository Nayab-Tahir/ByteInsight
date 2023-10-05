import classes from "./Icon.module.css";

const Icon = (props) => {
  return (
    <div className={classes.icon} >
      <img src={props.iconImage} alt={props.alt} className={classes.iconImage} />
    </div>
  );
}

export default Icon;