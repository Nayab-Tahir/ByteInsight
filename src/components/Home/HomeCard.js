import classes from "./HomeContent.module.css";

const HomeCard = (props) => {
  return (
    <div className={props.className}>
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
