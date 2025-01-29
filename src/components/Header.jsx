import React from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Modern TODO
      </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {darkMode ? (
          <SunIcon className="h-6 w-6 text-yellow-500" />
        ) : (
          <MoonIcon className="h-6 w-6 text-gray-600" />
        )}
      </button>
    </header>
  )
}
