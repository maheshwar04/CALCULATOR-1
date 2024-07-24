import React from "react";
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ handleButtonClick }) => {
  let buttons = [
    "C",
    "%",
    "&#x232B;",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];
  const diffIndices = [0, 1, 2, 3, 7, 11, 15];
  return (
    <div className={styles.buttonsContainer}>
      {buttons.map((e, index) => (
        <button
          key={index}
          className={`
            ${styles.button} 
            ${diffIndices.includes(index) ? styles.diffButton : ""}
            ${e === "=" ? styles.equalButton : ""} `}
          dangerouslySetInnerHTML={{ __html: e }}
          onClick={() => handleButtonClick(e)}
        />
      ))}
    </div>
  );
};

export default ButtonsContainer;
