import Header from "./components/Header/Header";
import HomePageImg from "./HomePageImg.jpg";
import classes from "./HomePageImg.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={classes.imageContainer}>
        <img src={HomePageImg} alt="" className={classes.homeImg} />
      </div>
    </>
  );
}

export default App;
