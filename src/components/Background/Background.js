import Image from "./HomePageImg.png";
import classes from "./Background.module.css";
import { useState, useEffect, useCallback } from "react";

const textArray = ["Software Engineer", "Web Developer", "Data Scientist"];

const Background = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [text, setText] = useState("");

  const typeText = useCallback(() => {
    setText((prevText) => prevText + textArray[textIndex][charIndex]);
    setCharIndex((prevCharIndex) => prevCharIndex + 1);
  }, [textIndex, charIndex]);

  const eraseText = useCallback(() => {
    setText((prevText) => prevText.slice(0, -1));
    setCharIndex((prevCharIndex) => prevCharIndex - 1);
  }, []);

  useEffect(() => {
    const typeErase = setInterval(() => {
      if (isTyping && charIndex < textArray[textIndex].length) {
        typeText();
      } else if (isTyping) {
        clearInterval(typeErase);
        setTimeout(() => {
          setIsTyping(false);
          setInterval(typeErase);
        }, 2000);
      } else if (charIndex > 0) {
        eraseText();
      } else {
        clearInterval(typeErase);
        setTimeout(() => {
          setTextIndex((prevTextIndex) => (prevTextIndex + 1) % textArray.length);
          setIsTyping(true);
          setInterval(typeErase);
        }, 500);
      }
    }, 70);

    return () => clearInterval(typeErase);
  }, [textIndex, charIndex, isTyping, typeText, eraseText]);

  return (
    <div className={classes.background}>
      <img src={Image} alt="" className={classes.image} />
      <div className={classes.intro}>
        <h3 className={classes.greetings}>
          <i>Hi, my name is</i>
        </h3>
        <h1 className={classes.name}>Nayab Tahir</h1>
        <h3 className={classes.introHead}>
          I am
          <em>
            <div className={classes.typingContainer}>
              <span className={classes.typingText}>{text}</span>
              <span className={classes.typingCursor}>|</span>
            </div>
          </em>
        </h3>
        <p className={classes.introPara}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          nulla laudantium tempore dicta obcaecati quos asperiores voluptatum
          dolore officia quaerat.
        </p>
      </div>
    </div>
  );
};

export default Background;
