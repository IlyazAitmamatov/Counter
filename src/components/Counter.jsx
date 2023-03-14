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
                              style={{margin: '5px 0', borderRadius: '20px 20px 0 0', fontSize: '60px'}} 
                              onClick={plus}
                        >
                              +
                        </MyButton>

                        <MyButton 
                              style={{margin: '5px 0', borderRadius: '0 0 20px 20px', fontSize: '60px'}} 
                              onClick={minus}
                        >
                              -
                        </MyButton>
                  </div>
            </div>
      );
}

export default Counter;
