import React, { useState } from 'react'
import { format } from 'date-fns'
import toast from 'react-hot-toast'

export default function TaskForm({ setTasks }) {
  const [title, setTitle] = useState('')
  const [dueDate, setDueDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!title.trim()) {
      toast.error('Title is required')
      return
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
      dueDate,
      createdAt: new Date().toISOString()
    }

    setTasks(prev => [...prev, newTask])
    setTitle('')
    setDueDate('')
    toast.success('Task created!')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-4 flex-wrap">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 min-w-[200px] p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </div>
    </form>
  )
}
