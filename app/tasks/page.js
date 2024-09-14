"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import DailyTaskForm from "@/components/DailyTaskForm";
import TaskList from "@/components/TaskList";

export default function DailyTasksPage() {
  const [tasks, setTasks] = useState([]);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    // Load tasks and streak from localStorage on component mount
    const savedTasks = JSON.parse(localStorage.getItem("dailyTasks")) || [];
    const savedStreak = parseInt(localStorage.getItem("streak")) || 0;
    setTasks(savedTasks);
    setStreak(savedStreak);
  }, []);

  useEffect(() => {
    // Save tasks to localStorage whenever they change
    localStorage.setItem("dailyTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);

    // Update streak
    const allTasksCompleted = updatedTasks.every((task) => task.completed);
    if (allTasksCompleted) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem("streak", newStreak.toString());
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Daily Tasks</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DailyTaskForm addTask={addTask} />
          <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">
            Current Streak: {streak} days
          </h2>
        </div>
      </main>
    </div>
  );
}
