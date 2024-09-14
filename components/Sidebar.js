"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        router.push("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("An error occurred during logout", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <aside className="w-64 bg-gray-100 p-6">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className="block py-2 px-4 hover:bg-gray-200 rounded"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/challenges"
              className="block py-2 px-4 hover:bg-gray-200 rounded"
            >
              Challenges
            </Link>
          </li>
          <li>
            <Link
              href="/tasks"
              className="block py-2 px-4 hover:bg-gray-200 rounded"
            >
              Daily Tasks
            </Link>
          </li>
          <li>
            <Link
              href="/progress"
              className="block py-2 px-4 hover:bg-gray-200 rounded"
            >
              Progress
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="w-full text-left py-2 px-4 hover:bg-gray-200 rounded disabled:opacity-50"
            >
              {isLoggingOut ? "Logging out..." : "Logout"}
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
