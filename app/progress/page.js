'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import ProgressChart from '@/components/ProgressChart';
import AchievementBadges from '@/components/AchievementBadges';
import MilestoneCelebrations from '@/components/MilestoneCelebrations';

export default function ProgressPage() {
  const [progressData, setProgressData] = useState({
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Tasks Completed',
        data: [5, 8, 12, 15],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });

  const [badges, setBadges] = useState([
    { id: 1, name: 'First Task Completed', achieved: true },
    { id: 2, name: '7-Day Streak', achieved: false },
    { id: 3, name: 'Challenge Master', achieved: false },
  ]);

  const [milestones, setMilestones] = useState([
    { id: 1, name: 'Completed 10 tasks', achieved: true },
    { id: 2, name: 'Finished first challenge', achieved: false },
    { id: 3, name: 'Maintained 30-day streak', achieved: false },
  ]);

  // Simulating data fetching
  useEffect(() => {
    // In a real application, you would fetch this data from your backend
    // For now, we'll just use the initial state
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Progress Tracking</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProgressChart data={progressData} />
          <AchievementBadges badges={badges} />
        </div>
        <div className="mt-8">
          <MilestoneCelebrations milestones={milestones} />
        </div>
      </main>
    </div>
  );
}