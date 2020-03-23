import React from 'react';

import Card from './components/card/card.component'
import movies from './data.json';

import './App.scss';

function App() {
  return (
    <main>
      {movies.map(movie => (
        <Card className="mr" key={`${movie.id}`}>
          <Card.Image src={movie.image} alt={movie.title} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.desc}</Card.Text>
            <Card.Button>{movie.ctaText}</Card.Button>
          </Card.Body>
        </Card>
      ))}
    </main>
  );
}

export default App;
