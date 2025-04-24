import React, { useState } from 'react';
import MoodSelector from './components/MoodSelector';
import MoodDisplay from './components/MoodDisplay';
import './App.css';

const App = () => {
  const [mood, setMood] = useState('');

  return (
    <div className={`app-container ${mood.toLowerCase()}`}>
      <MoodSelector setMood={setMood} />
      {mood && <MoodDisplay mood={mood} />}
    </div>
  );
};

export default App;
