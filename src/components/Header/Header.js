import classes from "./Header.module.css";
import Logo from "./../Logo/Logo";
import Nav from "./../Navigation/Navigation";
import IconGithub from "./IconGithub.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.startSection}>
        <Logo />
      </div>
      <div className={classes.midSection}>
        <Nav />
      </div>
      <div className={classes.endSection}>
        <div>1</div>
        <div>2</div>
        <div><img src={IconGithub} alt="" height="50rem" /></div>
      </div>
    </header>
  );
};

export default Header;
