'use client' // This is a client component
import { useState } from 'react'
import { marked } from 'marked' // Markdown parses
// import Script from 'next/script'

export default function Home() {
  const [state, setState] = useState(`
  # h1 Greetings !
  ## h2 My Markdown Previewer
  ### h3 FCC Markdown Project link:
  [FCC Markdown Previewer Project](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)

  **bold** text
  _italic_ text
  **_both!_**
  ~~crossed out~~.

  ### List
  - list item 1
  - list item 2
  > quote

  \`inline code\`
  \`\`\`
  // block code
  function name(params) {
    return
  }
  \`\`\`
  `) // Declare a state variable

  marked.setOptions({ breaks: true }) // Set option to interpret carriage returns and renders them as <br> (line break) elements

  const parsedHtml = marked.parse(state)

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
            className="w-full h-full bg-gray-700"
          ></textarea>
        </div>

        <div className=" bg-gray-800">
          <h2 className="">Previewer</h2>
          {/* Set as innerHtml because otherway it is set as text */}
          <div id="preview" dangerouslySetInnerHTML={{ __html: parsedHtml }}></div>
        </div>
      </main>

      <footer className="">Footer</footer>

      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </div>
  )
}

/*
  Alternative with script tag

  // Add 'marked' library to parse markdown alternative add with npm
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  Use Next.js 'Script' for inline scripts. Error: Text content does not match server-rendered HTML.
  <Script>document.getElementById('preview').innerHTML = marked.parse('sdf')</Script>

  // Alternative use 'dangerouslySetInnerHTML'
  <Script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js" strategy="beforeInteractive" onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)} />
  <Script id="show-banner" dangerouslySetInnerHTML={{__html: `document.getElementById('preview').innerHTML = 'test'`, }} />

  // https://nextjs.org/docs/pages/building-your-application/optimizing/scripts
  // https://nextjs.org/docs/messages/react-hydration-error
 */
