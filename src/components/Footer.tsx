'use client'

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 text-center py-4">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} <span className="font-semibold text-gray-800">UMLBoard</span>. All rights reserved.
      </p>
    </footer>
  )
}
