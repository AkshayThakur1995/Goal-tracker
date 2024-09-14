"use client";

import { useState } from "react";

export default function DailyTaskForm({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const [relatedChallenge, setRelatedChallenge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && relatedChallenge) {
      addTask({ name: taskName, challenge: relatedChallenge });
      setTaskName("");
      setRelatedChallenge("");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Add Daily Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="taskName" className="block mb-1">
            Task Name
          </label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="relatedChallenge" className="block mb-1">
            Related Challenge
          </label>
          <input
            type="text"
            id="relatedChallenge"
            value={relatedChallenge}
            onChange={(e) => setRelatedChallenge(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}


