import Image from "./HomePageImg.png";
import classes from "./Background.module.css";

const Background = () => {
  return (
    <div className={classes.background}>
      <img src={Image} alt="" className={classes.image} />
      <h1 className={classes.quote}>Gain Insight, bit by bit, every Byte.</h1>
    </div>
  );
};

export default Background;
