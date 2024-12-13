/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding more styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="react-logo.png"` in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */
import { createRoot } from "react-dom/client"
import { createElement } from "react"

const root = createRoot(document.getElementById("root"))

root.render(
  <main class="">
    <img src="react-logo.png" width="40px" alt="react logo"/>
    <h1>bobo</h1>
    <ul>
      <li>bobo1</li>
      <li>bobo2</li>
      <li>bobo3</li>
      <li>bobo4</li>
    </ul>
  </main>
)
