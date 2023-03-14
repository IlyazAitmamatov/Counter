import React from 'react';
import MyButton from '../ui/button/MyButton';

const Reset = ({setCounter}) => {

      const resetCounter = () => {
            setCounter(0)
      }

      return (
            <MyButton onClick={resetCounter}>Reset</MyButton>
      );
}

export default Reset;
