import React from 'react';
import Counter from '../components/Counter';
import "../styleSheet/stylePages/Home.css"

const Home = ({counter, setCounter}) => {
      return (
            <div className='container'>
                  <div className="mostUp">
                        <Counter counter={counter} setCounter={setCounter}/>
                  </div>
            </div>
      );
}

export default Home;
