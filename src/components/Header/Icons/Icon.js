import classes from "./Icon.module.css";

const Icon = (props) => {
  const iconClickHandler = (event) => {
    event.preventDefault();
    window.open(props.address, '_blank');
  }

  return (
    <div className={classes.icon} >
      <img src={props.iconImage} alt={props.alt} className={classes.iconImage} onClick={iconClickHandler} />
    </div>
  );
}

export default Icon;