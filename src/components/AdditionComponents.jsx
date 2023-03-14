import React from 'react';
import '../styleSheet/styleComponents/AdditionComponents.css'
import Reset from './Reset';

const AdditionComponents = ({counter, setCounter}) => {
      return (
            <div className='additionComponents'>
                  <div className="additionComponents_item">
                        <Reset setCounter={setCounter}/>
                  </div>
            </div>
      );
}

export default AdditionComponents;
