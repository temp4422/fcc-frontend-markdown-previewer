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

  ![image](image.jpg)
  `) // Declare a state variable

  marked.setOptions({ breaks: true }) // Set option to interpret carriage returns and renders them as <br> (line break) elements

  const parsedHtml = marked.parse(state)

  return (
    <div className="grid h-screen bg-gray-500">
      <header className="text-center">
        <h1 className="">Markdown Previewer</h1>
      </header>
      <main className="grid grid-cols-2  w-full h-full">
        <div className="h-full bg-gray-500 p-0 m-0">
          <h2 className="text-center p-2 border-solid border-2 border-gray-800 rounded-md">
            Editor
          </h2>
          <textarea
            id="editor"
            value={state} // Force the input's value to match the state variable
            onChange={(e) => setState(e.target.value)} // Update the state variable on any edits
            className="w-full h-[85%] box-border bg-gray-500 p-0 m-0 b-0 "
          ></textarea>
        </div>

        <div className=" h-full bg-gray-500 border-l-solid border-l-2 border-l-gray-800 rounded-md">
          <h2 className="text-center p-2 border-solid border-2 border-gray-800 rounded-md">
            Previewer
          </h2>
          {/* Set as innerHtml because otherway it is set as text */}
          <div id="preview" dangerouslySetInnerHTML={{ __html: parsedHtml }} className="p-4"></div>
        </div>
      </main>

      <footer className="text-center">
        Made by{' '}
        <a href="https://github.com/webdev4422/fcc-frontend-markdown-previewer">webdev4422</a>
      </footer>

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
