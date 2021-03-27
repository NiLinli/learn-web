# v-html/text

```js
// /src/platforms/web/compiler/directives/text.js
import { addProp } from 'compiler/helpers'

export default function text (el: ASTElement, dir: ASTDirective) {
  if (dir.value) {
    // textContent
    addProp(el, 'textContent', `_s(${dir.value})`, dir)
  }
}


// /src/platforms/web/compiler/directives/html.js
import { addProp } from 'compiler/helpers'

export default function html (el: ASTElement, dir: ASTDirective) {
  if (dir.value) {
    // innerHTML
    addProp(el, 'innerHTML', `_s(${dir.value})`, dir)
  }
}

```
