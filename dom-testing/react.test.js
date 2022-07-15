import '@testing-library/jest-dom/extend-expect'
import * as React from 'react'
import ReactDOM from 'react-dom'
import {screen, within} from '@testing-library/dom'
import user from '@testing-library/user-event'
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

function Counter() {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(c => c + 1)
  return (
    <div>
      <button onClick={increment}>{count}</button>
    </div>
  )
}

function render(ui) {
  const container = document.createElement('div')
  // Counter, above, doesn't exist yet, so it's passed into 'ui' and then rendered into the container div
  ReactDOM.render(ui, container)
  // append the container div to the document's body
  document.body.appendChild(container)
  return {
    // getQueriesForElement is an alias for 'within' so I replaced it
    ...within(container),
    container,
    cleanup() {
      ReactDOM.unmountComponentAtNode(container)
      document.body.removeChild(container)
    }
  }
}

test('renders a counter', () => {
  const { cleanup } = render(<Counter />)
  const counter = screen.getByText('0')
  user.click(counter)
  expect(counter).toHaveTextContent('1')

  user.click(counter)
  expect(counter).toHaveTextContent('2')
  cleanup()
})
