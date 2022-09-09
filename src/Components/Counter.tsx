import { useState } from 'react'
import { UniversalButton } from './Button'
import style from './CounterStyle.module.css'

export const Counter = () => {
  const [count, setCount] = useState(0)
  const countHandler = () => {
    if (count !== 5) {
      setCount(count + 1)
    }
  }
  const resetHandler = () => {
    setCount(0)
  }

  const counterClasses = count === 5 ? style.counterStop : style.counter

  return (
    <div className={style.outerborder}>
      <div className={style.content}>
        <div className={counterClasses}>{count}</div>
        <div className={style.buttonContainer}>
          <UniversalButton handler={countHandler} name={'inc'} disable={count === 5} />
          <UniversalButton handler={resetHandler} name={'reset'} disable={count === 0} />
        </div>
      </div>
    </div>
  )
}
