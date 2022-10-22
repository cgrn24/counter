import { FormEvent, useEffect, useState } from 'react'
import { UniversalButton } from './Button'
import style from './SettingsStyle.module.css'

type SettingPropsType = {
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

export const Settings = (props: SettingPropsType) => {
  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(5)

  const onClickHandler = () => {
    props.setCount(minValue)
    props.setMinValue(minValue)
    props.setMaxValue(maxValue)
  }

  const changeMinValue = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.valueAsNumber === maxValue) {
      props.setError(true)
    }
    if (e.currentTarget.valueAsNumber > maxValue) {
      props.setError(true)
    }
    if (e.currentTarget.valueAsNumber < maxValue) {
      props.setError(false)
    }
    if (e.currentTarget.valueAsNumber < 0) {
      props.setError(true)
    }

    setMinValue(e.currentTarget.valueAsNumber)
  }
  const changeMaxValue = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.valueAsNumber === minValue) {
      props.setError(true)
    }
    if (e.currentTarget.valueAsNumber < minValue) {
      props.setError(true)
    }
    if (e.currentTarget.valueAsNumber > minValue) {
      props.setError(false)
    }
    if (e.currentTarget.valueAsNumber <= 0) {
      props.setError(true)
    }

    setMaxValue(e.currentTarget.valueAsNumber)
  }
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
    localStorage.setItem('minValue', JSON.stringify(minValue))
  }, [minValue])
  useEffect(() => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
  }, [maxValue])

  return (
    <div className={style.outerborder}>
      <div className={style.content}>
        <div className={style.inputText}>
          <span>max value:</span> <input value={maxValue} type={'number'} onChange={changeMaxValue} className={props.error ? style.inputError : style.input} />
        </div>
        <div className={style.inputText}>
          <span>min value:</span> <input value={minValue} type={'number'} onChange={changeMinValue} className={props.error ? style.inputError : style.input} />
        </div>
      </div>
      <div className={style.buttonContainer}>
        <UniversalButton handler={onClickHandler} name={'set'} disable={props.error} />
      </div>
    </div>
  )
}
