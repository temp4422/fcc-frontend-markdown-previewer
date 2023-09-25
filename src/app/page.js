'use client' // This is a client component
import { useState } from 'react'

export default function Home() {
  const [state, setState] = useState('') // Declare a state variable

  return (
    <div className="h-screen bg-gray-600">
      <header className="">
        <nav className="nav">Header</nav>
      </header>

      <main className="grid grid-cols-2 bg-gray-700 w-full h-full overflow-hidden">
        <div className="h-full bg-gray-500">
          <h2 className="">Editor</h2>
          <textarea
            id="editor"
            value={state} // Force the input's value to match the state variable
            onChange={(e) => setState(e.target.value)} // Update the state variable on any edits
            className="w-full h-fit bg-gray-700"
          ></textarea>
        </div>

        <div className=" bg-gray-800">
          <h2 className="">Previewer</h2>
          <div id="preview">{state}</div>
        </div>
      </main>

      <footer className="">Footer</footer>
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </div>
  )
}
