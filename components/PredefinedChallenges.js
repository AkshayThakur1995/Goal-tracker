'use client';

import { useState } from 'react';

const predefinedChallenges = [
  { name: '30-Day Fitness Challenge', category: 'Fitness', duration: 30 },
  { name: 'Learn a New Language', category: 'Learning', duration: 90 },
  { name: 'Daily Meditation', category: 'Mindfulness', duration: 21 },
  { name: 'Public Speaking Practice', category: 'Communication', duration: 30 },
];

export default function PredefinedChallenges({ addChallenge }) {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const handleSelectChallenge = (challenge) => {
    setSelectedChallenge(challenge);
  };

  const handleAddChallenge = () => {
    if (selectedChallenge) {
      addChallenge(selectedChallenge);
      setSelectedChallenge(null);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Predefined Challenges</h2>
      <ul className="space-y-2">
        {predefinedChallenges.map((challenge, index) => (
          <li key={index} className="flex items-center">
            <input
              type="radio"
              id={`challenge-${index}`}
              name="predefinedChallenge"
              className="mr-2"
              onChange={() => handleSelectChallenge(challenge)}
            />
            <label htmlFor={`challenge-${index}`}>
              {challenge.name} ({challenge.duration} days)
            </label>
          </li>
        ))}
      </ul>
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        onClick={handleAddChallenge}
        disabled={!selectedChallenge}
      >
        Add Selected Challenge
      </button>
    </div>
  );
}