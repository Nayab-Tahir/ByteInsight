import classes from "./HomeContent.module.css";

const HomeCard = (props) => {
  let cardClass = "";
  if(!props.isAnimating && props.index !== props.hoveredIndex) cardClass = "";
  else if(props.index === props.hoveredIndex) cardClass = classes.hoveredCard;
  else if (props.index === 0) cardClass = classes.card0;
  else if (props.index === 1) cardClass = classes.card1;
  else cardClass = classes.card2;

  const hoverHandler = () => {
    props.toggleAnimation(props.index);
  };

  return (
    <div
      className={`${classes.homeCard} ${cardClass}`}
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
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
