import '@testing-library/jest-dom/extend-expect'
import * as React from 'react'
import ReactDOM from 'react-dom'
import {getQueriesForElement} from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

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

}

test('renders a counter', () => {

})
