'use client'

import React, { useState } from 'react'

const umlDiagrams = [
  {
    id: 'class',
    title: 'Class Diagram',
    desc: 'Represents classes, their attributes, methods, and relationships such as inheritance and association.',
    svg: (
      <svg viewBox="0 0 320 140" className="w-full h-40" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="304" height="124" rx="8" fill="white" stroke="#111827" />
        <line x1="8" y1="44" x2="312" y2="44" stroke="#111827" />
        <line x1="8" y1="86" x2="312" y2="86" stroke="#111827" />
        <text x="20" y="30" fontSize="12" fontFamily="monospace">Person</text>
        <text x="20" y="62" fontSize="11" fontFamily="monospace">- name: string</text>
        <text x="20" y="78" fontSize="11" fontFamily="monospace">+ greet(): void</text>
      </svg>
    ),
  },
  {
    id: 'sequence',
    title: 'Sequence Diagram',
    desc: 'Shows how objects interact with each other over time through messages.',
    svg: (
      <svg viewBox="0 0 420 120" className="w-full h-40" xmlns="http://www.w3.org/2000/svg">
        <text x="40" y="18" fontSize="12" fontFamily="monospace">User</text>
        <line x1="60" y1="24" x2="60" y2="100" stroke="#111827" strokeDasharray="3 3"/>
        <text x="170" y="18" fontSize="12" fontFamily="monospace">System</text>
        <line x1="200" y1="24" x2="200" y2="100" stroke="#111827" strokeDasharray="3 3"/>
        <text x="320" y="18" fontSize="12" fontFamily="monospace">DB</text>
        <line x1="340" y1="24" x2="340" y2="100" stroke="#111827" strokeDasharray="3 3"/>
        <line x1="60" y1="40" x2="200" y2="40" stroke="#111827" markerEnd="url(#arrow)"/>
        <text x="120" y="36" fontSize="10" fontFamily="monospace">login()</text>
        <line x1="200" y1="56" x2="340" y2="56" stroke="#111827" markerEnd="url(#arrow)"/>
        <text x="240" y="52" fontSize="10" fontFamily="monospace">query()</text>
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 L2,3 z" fill="#111827" />
          </marker>
        </defs>
      </svg>
    ),
  },
  {
    id: 'usecase',
    title: 'Use Case Diagram',
    desc: 'Shows interactions between users (actors) and system functionalities (use cases).',
    svg: (
      <svg viewBox="0 0 420 120" className="w-full h-40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="20" stroke="#111827" fill="none" />
        <text x="45" y="110" fontSize="11" fontFamily="monospace">User</text>
        <ellipse cx="260" cy="50" rx="80" ry="25" stroke="#111827" fill="none"/>
        <text x="210" y="55" fontSize="11" fontFamily="monospace">Login to System</text>
        <line x1="80" y1="60" x2="180" y2="50" stroke="#111827" />
      </svg>
    ),
  },
  {
    id: 'activity',
    title: 'Activity Diagram',
    desc: 'Shows the workflow of stepwise activities and actions with decision points.',
    svg: (
      <svg viewBox="0 0 420 140" className="w-full h-40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="70" r="10" fill="#111827"/>
        <rect x="100" y="55" width="80" height="30" rx="4" stroke="#111827" fill="none"/>
        <text x="110" y="75" fontSize="11" fontFamily="monospace">Authenticate</text>
        <polygon points="220,70 240,55 260,70 240,85" stroke="#111827" fill="none"/>
        <rect x="280" y="55" width="80" height="30" rx="4" stroke="#111827" fill="none"/>
        <text x="290" y="75" fontSize="11" fontFamily="monospace">Dashboard</text>
        <line x1="60" y1="70" x2="100" y2="70" stroke="#111827"/>
        <line x1="180" y1="70" x2="220" y2="70" stroke="#111827"/>
        <line x1="260" y1="70" x2="280" y2="70" stroke="#111827"/>
      </svg>
    ),
  },
]

export default function Board() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="bg-gradient-to-br from-blue-100 to-pink-100 w-full min-h-screen flex flex-col items-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-3 bg-gradient-to-r from-blue-500 to-pink-400 bg-transparent bg-clip-text text-transparent mt-10">UML Diagrams</h1>
        <p className="text-center text-gray-600 mb-10">
          Explore key UML diagram types used in software system design.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {umlDiagrams.map((d) => (
            <div
              key={d.id}
              className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-200"
            >
              <h2 className="text-xl font-semibold mb-2">{d.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{d.desc}</p>
              <div className="bg-gray-100 rounded-md p-3 flex justify-center">
                {d.svg}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
