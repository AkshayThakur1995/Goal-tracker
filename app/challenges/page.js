"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import PredefinedChallenges from "@/components/PredefinedChallenges";
import CustomChallengeForm from "@/components/CustomChallengeForm";

export default function ChallengesPage() {
  const [challenges, setChallenges] = useState([]);

  const addChallenge = (newChallenge) => {
    setChallenges([...challenges, newChallenge]);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Challenges</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PredefinedChallenges addChallenge={addChallenge} />
          <CustomChallengeForm addChallenge={addChallenge} />
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Your Challenges</h2>
          <ul className="space-y-2">
            {challenges.map((challenge, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold">{challenge.name}</h3>
                <p>Category: {challenge.category}</p>
                <p>Duration: {challenge.duration} days</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
