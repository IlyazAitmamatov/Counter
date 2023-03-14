import React from 'react';
import AdditionComponents from '../components/AdditionComponents';
import Counter from '../components/Counter';
import LinkMyRep from '../components/LinkMyRep';
import "../styleSheet/stylePages/Home.css"

const Home = ({counter, setCounter}) => {
      return (
            <div className='container'>
                  <div className="mostUp">
                        <AdditionComponents counter={counter} setCounter={setCounter}/>
                        <Counter counter={counter} setCounter={setCounter}/>
                        <LinkMyRep/>
                  </div>
            </div>
      );
}

export default Home;
