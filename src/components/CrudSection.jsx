import { useState } from "react";
import { Database, Plus, Edit, Trash2, Save, X } from "lucide-react";

const CRUDSection = ({ id }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Build responsive dashboard",
      status: "completed",
      priority: "high",
    },
    {
      id: 2,
      title: "Implement user authentication",
      status: "in-progress",
      priority: "medium",
    },
    { id: 3, title: "Write unit tests", status: "pending", priority: "low" },
  ]);

  const [isEditing, setIsEditing] = useState(null);
  const [newTask, setNewTask] = useState({
    title: "",
    status: "pending",
    priority: "medium",
  });
  const [editingTask, setEditingTask] = useState({
    title: "",
    status: "",
    priority: "",
  });

  const createTask = () => {
    if (newTask.title.trim()) {
      setTasks([...tasks, { id: Date.now(), ...newTask }]);
      setNewTask({ title: "", status: "pending", priority: "medium" });
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditing = (task) => {
    setIsEditing(task.id);
    setEditingTask({
      title: task.title,
      status: task.status,
      priority: task.priority,
    });
  };

  const saveEdit = (id) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...editingTask } : task))
    );
    setIsEditing(null);
  };

  const cancelEdit = () => {
    setIsEditing(null);
    setEditingTask({ title: "", status: "", priority: "" });
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section
      id={id}
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            CRUD Operations Demo
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interactive task management system demonstrating Create, Read,
            Update, and Delete operations with real-time state management and
            modern UI components.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          {/* Create Task Form */}
          <div className="mb-8 p-6 bg-gradient-to-r from-cyan-50 to-purple-50 rounded-xl border border-cyan-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <Plus className="w-5 h-5 mr-2 text-cyan-600" />
              Add New Task
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Task title..."
                value={newTask.title}
                onChange={(e) =>
                  setNewTask({ ...newTask, title: e.target.value })
                }
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
              />
              <select
                value={newTask.status}
                onChange={(e) =>
                  setNewTask({ ...newTask, status: e.target.value })
                }
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              <select
                value={newTask.priority}
                onChange={(e) =>
                  setNewTask({ ...newTask, priority: e.target.value })
                }
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
              <button
                onClick={createTask}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add Task
              </button>
            </div>
          </div>

          {/* Tasks List */}
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors border border-gray-200"
              >
                {isEditing === task.id ? (
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <input
                      type="text"
                      value={editingTask.title}
                      onChange={(e) =>
                        setEditingTask({
                          ...editingTask,
                          title: e.target.value,
                        })
                      }
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                    />
                    <select
                      value={editingTask.status}
                      onChange={(e) =>
                        setEditingTask({
                          ...editingTask,
                          status: e.target.value,
                        })
                      }
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                    >
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                    <select
                      value={editingTask.priority}
                      onChange={(e) =>
                        setEditingTask({
                          ...editingTask,
                          priority: e.target.value,
                        })
                      }
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                    >
                      <option value="low">Low Priority</option>
                      <option value="medium">Medium Priority</option>
                      <option value="high">High Priority</option>
                    </select>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => saveEdit(task.id)}
                        className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
                      >
                        <Save className="w-4 h-4" />
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {task.title}
                      </h4>
                      <div className="flex space-x-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            task.status
                          )}`}
                        >
                          {task.status.replace("-", " ")}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                            task.priority
                          )}`}
                        >
                          {task.priority} priority
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => startEditing(task)}
                        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors hover:scale-110"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors hover:scale-110"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {tasks.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <Database className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p>No tasks yet. Create your first task above!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default CRUDSection;
