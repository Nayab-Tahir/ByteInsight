import classes from "./HomeContent.module.css";
import HomeCard from "./HomeCard";
import {useState } from "react";

const HomeCardsDisplay = (props) => {

    setTimeout(() => {
        props.removeCard();
    }, 3950);

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