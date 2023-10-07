import classes from "./HomeContent.module.css";
import HomeCard from "./HomeCard";
import { useEffect, useState } from "react";

const CARD_LIST = ["Card no 1", "Card no 2", "Card no 3", "Card no 4"];

const HomeContent = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [displayedCards, setDisplayedCards] = useState([]);
  const [removedCardIndex, setRemovedCardIndex] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrIndex((prevIndex) => (prevIndex + 1) % CARD_LIST.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [CARD_LIST.length]);

  useEffect(() => {
    const index1 = currIndex;
    const index2 = (currIndex + 1) % CARD_LIST.length;
    const index3 = (currIndex + 2) % CARD_LIST.length;

    const newDisplayedCards = [
      CARD_LIST[index1],
      CARD_LIST[index2],
      CARD_LIST[index3],
    ];
    setDisplayedCards(newDisplayedCards);
  }, [CARD_LIST, currIndex]);

  return (
    <div className={classes.homeContentSection}>
      <div className={classes.homeCardsContainer}>
        {displayedCards.map((cardName, index) => {
          return (
            <HomeCard
              name={cardName}
              className={`homeCard ${index === removedCardIndex ? "removed" : ""}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeContent;
