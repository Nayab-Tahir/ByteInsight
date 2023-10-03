import classes from "./Header.module.css";
import Logo from "./../Logo/Logo";
import Nav from "./../Navigation/Navigation";

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
        <div>3</div>
      </div>
    </header>
  );
};

export default Header;
