import classes from "./Header.module.css";
import Logo from "./Logo/Logo";
import Nav from "./Navigation/Navigation";
import Icons from "./Icons/Icons";

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
        <Icons />
      </div>
    </header>
  );
};

export default Header;
