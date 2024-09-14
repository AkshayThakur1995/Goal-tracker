export default function AchievementBadges({ badges }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Achievement Badges</h2>
      <div className="grid grid-cols-2 gap-4">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`p-4 rounded-lg ${
              badge.achieved
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            <h3 className="font-semibold">{badge.name}</h3>
            <p>{badge.achieved ? "Achieved" : "Not yet achieved"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
