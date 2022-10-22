import { useState } from 'react'
import { UniversalButton } from './Button'
import style from './CounterStyle.module.css'

type CounterPropsType = {
  count: number
  setCount: (count: number) => void
  error: boolean
  setError: (error: boolean) => void
  minValue: number
  maxValue: number
  setMinValue: (minValue: number) => void
  setMaxValue: (maxValue: number) => void
  settingDisabler: boolean
  setSettingDisabler: (settingDisabler: boolean) => void
}

export const Counter = (props: CounterPropsType) => {
  const countHandler = () => {
    if (props.count !== props.maxValue) {
      props.setCount(props.count + 1)
    }
  }
  const resetHandler = () => {
    props.setCount(0)
  }

  const counterClasses = props.count === props.maxValue ? style.counterStop : style.counter

  return (
    <div className={style.outerborder}>
      {props.error && (
        <div className={style.content}>
          <div className={style.incorrectValue}>Incorrect value</div>
        </div>
      )}
      {!props.error && (
        <div className={style.content}>
          <div className={counterClasses}>{props.count}</div>
          <div className={style.buttonContainer}>
            <UniversalButton handler={countHandler} name={'inc'} disable={props.count === props.maxValue} />
            <UniversalButton handler={resetHandler} name={'reset'} disable={props.count === props.minValue} />
          </div>
        </div>
      )}
    </div>
  )
}
