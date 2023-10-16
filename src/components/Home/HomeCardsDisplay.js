import classes from "./HomeContent.module.css";
import HomeCard from "./HomeCard";

const HomeCardsDisplay = (props) => {

    return (
        <div className={classes.homeCardsContainer}>
        {props.displayedCards.map((cardName, index) => (
            <HomeCard
              name={cardName}
              index={index}
              key={props.currIndex + index}
            />
        ))
        }
      </div>
    );
};

export default HomeCardsDisplay;