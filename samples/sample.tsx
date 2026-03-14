import { useState, useCallback, type FC } from 'react';

interface TaskItem {
  id: string;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

interface TaskListProps {
  initialTasks: TaskItem[];
  onSave: (tasks: TaskItem[]) => Promise<void>;
}

const priorityColors: Record<TaskItem['priority'], string> = {
  low: 'text-gray-500',
  medium: 'text-amber-500',
  high: 'text-red-500',
};

export const TaskList: FC<TaskListProps> = ({ initialTasks, onSave }) => {
  const [tasks, setTasks] = useState<TaskItem[]>(initialTasks);
  const [filter, setFilter] = useState<'all' | 'active' | 'done'>('all');

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  }, []);

  const filtered = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'done') return task.completed;
    return true;
  });

  const remaining = tasks.filter((t) => !t.completed).length;

  return (
    <div className="mx-auto max-w-lg p-4">
      <h2 className="text-xl font-semibold">
        Tasks <span className="text-sm text-muted">({remaining} left)</span>
      </h2>
      <ul className="mt-4 space-y-2">
        {filtered.map((task) => (
          <li key={task.id} className="flex items-center gap-3 rounded border p-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span className={task.completed ? 'line-through opacity-50' : ''}>
              {task.title}
            </span>
            <span className={`ml-auto text-xs ${priorityColors[task.priority]}`}>
              {task.priority}
            </span>
          </li>
        ))}
      </ul>
      {filtered.length === 0 && <p className="mt-6 text-center text-gray-400">No tasks found.</p>}
      <button onClick={() => onSave(tasks)} className="mt-4 rounded bg-blue-600 px-4 py-2 text-white">
        Save
      </button>
    </div>
  );
};
