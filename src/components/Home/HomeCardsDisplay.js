import classes from "./HomeContent.module.css";
import HomeCard from "./HomeCard";
import { useState } from "react";

const HomeCardsDisplay = (props) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const toggleAnimationHandler = (index) => {
    if (isAnimating) {
      setIsAnimating(false);
      props.pauseAnimation();
      setHoveredIndex(index);
    } else {
      setIsAnimating(true);
      props.resumeAnimation();
      setHoveredIndex(-1);
    }
  };

  return (
    <div className={classes.homeCardsContainer}>
      {props.displayedCards.map((cardName, index) => (
        <HomeCard
          name={cardName}
          index={index}
          hoveredIndex={hoveredIndex}
          key={props.currIndex + index}
          isAnimating={isAnimating}
          toggleAnimation={toggleAnimationHandler}
        />
      ))}
    </div>
  );
};

export default HomeCardsDisplay;
