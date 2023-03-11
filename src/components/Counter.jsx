import React from 'react';
import MyButton from '../ui/button/MyButton';
import '../styleSheet/styleComponents/Counter.css'

const Counter = ({counter, setCounter}) => {
      
      const plus = () => {
            setCounter(counter + 1)
      }

      const minus = () => {
            counter === 0
            ?setCounter(0)
            :setCounter(counter - 1)
      }

      return (
            <div className='counter'>
                  <h1 className='counter_title'>{counter}</h1>
                  <div className='counter_buttons'>
                        <MyButton 
                              style={{margin: '10px 0', borderRadius: '50px 50px 0 0'}} 
                              onClick={plus}
                        >
                              +
                        </MyButton>

                        <MyButton 
                              style={{margin: '10px 0', borderRadius: '0 0 50px 50px'}} 
                              onClick={minus}
                        >
                              -
                        </MyButton>
                  </div>
            </div>
      );
}

export default Counter;
