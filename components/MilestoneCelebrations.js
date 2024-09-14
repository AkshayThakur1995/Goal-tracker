export default function MilestoneCelebrations({ milestones }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Milestone Celebrations</h2>
      <ul className="space-y-2">
        {milestones.map((milestone) => (
          <li
            key={milestone.id}
            className={`p-4 rounded-lg ${
              milestone.achieved
                ? "bg-yellow-100 text-yellow-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            <h3 className="font-semibold">{milestone.name}</h3>
            <p>{milestone.achieved ? "Congratulations!" : "Keep going!"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
