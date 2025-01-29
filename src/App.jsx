import React, { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import Header from './components/Header'
import { DragDropContext } from 'react-beautiful-dnd'

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleDragEnd = (result) => {
    if (!result.destination) return

    const items = Array.from(tasks)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setTasks(items)
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <TaskForm setTasks={setTasks} />
          <DragDropContext onDragEnd={handleDragEnd}>
            <TaskList tasks={tasks} setTasks={setTasks} />
          </DragDropContext>
        </div>
      </div>
    </div>
  )
}
