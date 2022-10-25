import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addCountAC, resetAC } from '../Reducers/counter-reducer'
import { AppRootStateType } from '../redux/store'
import { UniversalButton } from './Button'
import style from './CounterStyle.module.css'

export const Counter = () => {
  const count = useSelector<AppRootStateType, number>((state) => state.count)
  const error = useSelector<AppRootStateType, boolean>((state) => state.error)
  const minValue = useSelector<AppRootStateType, number>((state) => state.minValue)
  const maxValue = useSelector<AppRootStateType, number>((state) => state.maxValue)
  const dispatch = useDispatch()

  const countHandler = () => {
    if (count !== maxValue) {
      dispatch(addCountAC())
    }
  }
  const resetHandler = () => {
    dispatch(resetAC())
  }

  const counterClasses = count === maxValue ? style.counterStop : style.counter

  return (
    <div className={style.outerborder}>
      {error && (
        <div className={style.content}>
          <div className={style.incorrectValue}>Incorrect value</div>
        </div>
      )}
      {!error && (
        <div className={style.content}>
          <div className={counterClasses}>{count}</div>
          <div className={style.buttonContainer}>
            <UniversalButton handler={countHandler} name={'inc'} disable={count === maxValue} />
            <UniversalButton handler={resetHandler} name={'reset'} disable={count === minValue} />
          </div>
        </div>
      )}
    </div>
  )
}
