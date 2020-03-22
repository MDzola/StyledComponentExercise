import React from 'react';

import Card from './components/card/card.component'
import movies from './data.json';

import './App.scss';

function App() {
  return (
    <main>
      {movies.map(movie => (
        <Card>

        </Card>
      ))}
    </main>
  );
}

export default App;
