import React from 'react';

const moods = ['Happy', 'Sad', 'Romantic', 'Hyped', 'Relaxed'];

const MoodSelector = ({ setMood }) => {
  return (
    <div className="mood-selector">
      <h2>Select Your Mood</h2>
      <select onChange={(e) => setMood(e.target.value)}>
        <option value="">-- Choose a mood --</option>
        {moods.map((mood) => (
          <option key={mood} value={mood}>
            {mood}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MoodSelector;
