/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import Card from './components/Card';

const INITIAL_CARDS = [
   {
      img: 'http://dummyimage.com/286x180/a6a6ff',
      link: '#0',
      title: 'Card title',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: 'Go somewhere',
   },
   {
      link: '#1',
      title: 'Special title treatment',
      text: 'With supporting text below as a natural lead-in to additional content.',
      buttonText: 'Go somewhere',
   },
];

function App() {
   return (
      <div className="App">
         {INITIAL_CARDS.map((card) => (
            <Card {...card} key={nanoid()}>
               <p className="card-text">{card.text}</p>
            </Card>
         ))}
      </div>
   );
}

export default App;
