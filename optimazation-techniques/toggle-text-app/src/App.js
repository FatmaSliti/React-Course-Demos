import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  console.log('App Running')
  const [showText, setShowText] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleTextHandler = useCallback(() => { // useCallback solves the problem below by gauranteeing that the toggleTextHandler is always the exact same object in memory (so in every comparison it's the same => no need to re-evaluate the component)
    if (allowToggle) {
      setShowText(prevState => ! prevState)
    }
  }, [allowToggle])

  const allowToggleHandler = () => {
    setAllowToggle(true)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showText} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button> {/* the function is of type object so in every re-render caused by the state comparing this function with the previous function in the virtual DOM returns false because of js reference types (object === object => false) even if they have the same content  */}
      <Button onClick={toggleTextHandler}>Toggle Text</Button> {/* the function is of type object so in every re-render caused by the state comparing this function with the previous function in the virtual DOM returns false because of js reference types (object === object => false) even if they have the same content  */}
    </div>
  );
}

export default App;
