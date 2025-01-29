import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { TrashIcon } from '@heroicons/react/24/outline'
import { format } from 'date-fns'

export default function TaskItem({ task, index, onDelete, onToggle }) {
  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="h-5 w-5 rounded border-gray-300"
          />
          <div className="flex-1">
            <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900 dark:text-white'}`}>
              {task.title}
            </h3>
            {task.dueDate && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Due: {format(new Date(task.dueDate), 'MMM d, yyyy')}
              </p>
            )}
          </div>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      )}
    </Draggable>
  )
}
