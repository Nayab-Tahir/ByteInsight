import ByteInsightLogo from "./ByteInsightLogo.svg";
import classes from "./logo.module.css";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img src={ByteInsightLogo} alt="" />
    </div>
  );
};

export default Logo;
