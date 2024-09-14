export default function TaskList({ tasks, toggleTaskCompletion }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Your Daily Tasks</h2>
        {tasks.length === 0 ? (
          <p>No tasks added yet. Start by adding a task!</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li key={task.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`task-${task.id}`}
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                  className="mr-2"
                />
                <label
                  htmlFor={`task-${task.id}`}
                  className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}
                >
                  {task.name} ({task.challenge})
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }