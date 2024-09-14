import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Habit Tracker</h1>
        <p className="text-lg">Achieve your personal growth goals</p>
      </header>

      <main className="flex flex-col gap-8 items-center">
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-left">
            <li>Create and manage personal challenges</li>
            <li>Track daily tasks and build streaks</li>
            <li>Visualize your progress</li>
            <li>Connect with a supportive community</li>
            <li>Reflect on your journey</li>
          </ul>
        </section>

        <div className="flex gap-4 mt-8">
          <Link
            href="/dashboard"
            className="rounded-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            className="rounded-full border border-blue-600 text-blue-600 px-6 py-2 hover:bg-blue-50 transition-colors"
            href="/login"
          >
            Login
          </Link>
        </div>
      </main>

      <footer className="mt-16 text-center text-sm text-gray-600">
        <p>&copy; 2023 Habit Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
}
