import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Counter } from './Components/Counter'
import { Settings } from './Components/Settings'

function App() {
  const [error, setError] = useState<boolean>(false)
  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(5)
  const [count, setCount] = useState<number>(0)
  const [settingDisabler, setSettingDisabler] = useState<boolean>(false)

  useEffect(() => {
    let countvalue = localStorage.getItem('count')
    if (countvalue) {
      let newCountValue = JSON.parse(countvalue)
      setCount(newCountValue)
    }
  }, [])

  useEffect(() => {
    let minvalue = localStorage.getItem('minValue')
    if (minvalue) {
      let newMinValue = JSON.parse(minvalue)
      setMinValue(newMinValue)
    }
    let maxvalue = localStorage.getItem('maxValue')
    if (maxvalue) {
      let newMaxValue = JSON.parse(maxvalue)
      setMaxValue(newMaxValue)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count))
  }, [count])
  return (
    <div className='App'>
      <Settings
        count={count}
        setCount={setCount}
        error={error}
        setError={setError}
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        settingDisabler={settingDisabler}
        setSettingDisabler={setSettingDisabler}
      />
      <Counter
        count={count}
        setCount={setCount}
        error={error}
        setError={setError}
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        settingDisabler={settingDisabler}
        setSettingDisabler={setSettingDisabler}
      />
    </div>
  )
}

export default App
