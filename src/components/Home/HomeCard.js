import classes from "./HomeContent.module.css";

const HomeCard = (props) => {
  let className = "";
  if (props.index === 0) className = classes.card0;
  else if (props.index === 1) className = classes.card1;
  else className = classes.card2;

  return (
    <div
      className={`${classes.homeCard} ${className} ${
        props.isAnimating ? classes.resetCardAnimations : ""
      }`}
      onAnimationEnd={props.resetAnimation}
    >
      <h2 className={classes.homeCardTitle}>{props.name}</h2>
      <p className={classes.homeCardBody}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        eligendi minima soluta voluptatibus maiores rerum quidem magni sapiente,
        illo dolorum autem reiciendis blanditiis ea quasi odit.
      </p>
    </div>
  );
};

export default HomeCard;
