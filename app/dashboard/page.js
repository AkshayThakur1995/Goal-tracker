import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

import Sidebar from "@/components/Sidebar";
import ChallengeManagement from "@/components/ChallengeManagement";
import DailyTaskSystem from "@/components/DailyTaskSystem";
import ProgressTracking from "@/components/ProgressTracking";
import MotivationalContent from "@/components/MotivationalContent";
import TaskCalendar from "@/components/TaskCalendar";
export default function Dashboard() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (!token) {
    return <div>Not authenticated</div>;
  }
  try {
    const decoded = verify(token.value, process.env.JWT_SECRET);
    console.log("decoded", decoded);
    const completedDays = [
      "2023-05-01",
      "2023-05-03",
      "2023-05-05",
      "2023-05-07",
      // ... add more dates as needed
    ];
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Task Completion Calendar
            </h2>
            <TaskCalendar completedDays={completedDays} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ChallengeManagement />
            <DailyTaskSystem />
            <ProgressTracking />
            <MotivationalContent />
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error("Token verification failed:", error);

    if (error.name === "JWSInvalid") {
      return <div>Invalid authentication token. Please log in again.</div>;
    } else if (error.name === "TokenExpiredError") {
      return <div>Your session has expired. Please log in again.</div>;
    } else {
      return <div>Authentication failed. Please try logging in again.</div>;
    }
  }
}
