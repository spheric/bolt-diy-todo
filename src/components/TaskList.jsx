import React from 'react'
import TaskItem from './TaskItem'
import { Droppable } from 'react-beautiful-dnd'

export default function TaskList({ tasks, setTasks }) {
  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const handleToggle = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed }
        : task
    ))
  }

  return (
    <Droppable droppableId="tasks">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="space-y-4"
        >
          {tasks.map((task, index) => (
            <TaskItem
              key={task.id}
              task={task}
              index={index}
              onDelete={handleDelete}
              onToggle={handleToggle}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}
