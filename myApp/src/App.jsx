import { useState } from 'react'
import './App.css'

import Body from './Body'
import { Context } from './Context/Context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Context>
     <Body />
     </Context>
    </>
  )
}

export default App
