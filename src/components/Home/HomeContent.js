import classes from "./HomeContent.module.css";
import HomeCardsDisplay from "./HomeCardsDisplay";
import { useEffect, useState } from "react";

const CARD_LIST = ["Card no 1", "Card no 2", "Card no 3", "Card no 4"];

const HomeContent = () => {
  const [currIndex, setCurrIndex] = useState(3);
  const [displayedCards, setDisplayedCards] = useState([
    CARD_LIST[0],
    CARD_LIST[1],
    CARD_LIST[2],
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedCards((prevDisplayedCards) => {
        const newDisplayedCards = [...prevDisplayedCards];
        newDisplayedCards.shift();
        newDisplayedCards.push(CARD_LIST[currIndex]);
        setCurrIndex((prevIndex) => ((prevIndex + 1) % 4));
        return newDisplayedCards;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [currIndex]);

  return (
    <div className={classes.homeContentSection}>
      <HomeCardsDisplay
        currIndex={currIndex}
        displayedCards={displayedCards}
      />
    </div>
  );
};

export default HomeContent;
