import { useState } from 'react';

const useShow = (isBeingDisplayed = true) => {
  //true or false value
  const [isDisplayed, setIsDisplayed] = useState(isBeingDisplayed);

  const toggleDisplay = () => {
    setIsDisplayed(!isDisplayed);
  };

  return { isDisplayed, toggleDisplay };
};

export default useShow;
