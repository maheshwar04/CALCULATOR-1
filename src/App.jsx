import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  const [displayValue, setdisplayValue] = useState("");
  const ButtonClick = (e) => {
    if (e == "C") {
      setdisplayValue("");
    } else if (e == "=") {
      setdisplayValue(eval(displayValue));
    } else if (e == "&#x232B;") {
      const newVal = displayValue.slice(0, -1);
      setdisplayValue(newVal);
    } else {
      const newVal = displayValue + e;
      setdisplayValue(newVal);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={displayValue} />
      <ButtonsContainer handleButtonClick={ButtonClick} />
    </div>
  );
}

export default App;
