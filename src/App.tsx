import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Counter } from './Components/Counter'
import { Settings } from './Components/Settings'

function App() {
  return (
    <div className='App'>
      <Settings />
      <Counter />
    </div>
  )
}

export default App
