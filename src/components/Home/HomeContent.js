import classes from "./HomeContent.module.css";
import HomeCardsDisplay from "./HomeCardsDisplay";
import { useEffect, useState } from "react";

const CARD_LIST = ["Card no 1", "Card no 2", "Card no 3", "Card no 4"];

const HomeContent = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [displayedCards, setDisplayedCards] = useState([]);

  useEffect(() => {
    setDisplayedCards((prevDisplayedCards) => {
      const newDisplayedCards = prevDisplayedCards;
      newDisplayedCards.push(CARD_LIST[currIndex]);
      return newDisplayedCards;
    });
  }, [displayedCards.length, currIndex]);

  useEffect(() => {
    setDisplayedCards((prevDisplayedCards) => {
      const newDisplayedCards = prevDisplayedCards;
      newDisplayedCards.push(CARD_LIST[1]);
      newDisplayedCards.push(CARD_LIST[2]);
      return newDisplayedCards;
    });
    setCurrIndex(2);
  }, []);

  const removeCardHandler = () => {
    setDisplayedCards((prevDisplayedCards) => {
      return prevDisplayedCards.slice(1);
    });
    setCurrIndex((prevIndex) => (prevIndex + 1) % CARD_LIST.length);
  }

  return (
    <div className={classes.homeContentSection}>
      <HomeCardsDisplay currIndex={currIndex} displayedCards={displayedCards} removeCard={removeCardHandler} />
    </div>
  );
};

export default HomeContent;
