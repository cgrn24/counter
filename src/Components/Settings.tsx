import { FormEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { changeSettingsAC, setErrorAC } from '../Reducers/counter-reducer'
import { AppRootStateType } from '../redux/store'
import { UniversalButton } from './Button'
import style from './SettingsStyle.module.css'

export const Settings = () => {
  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(5)

  const error = useSelector<AppRootStateType, boolean>((state) => state.error)
  const dispatch = useDispatch()

  const onClickHandler = () => {
    dispatch(changeSettingsAC(minValue, maxValue))
  }

  const changeMinValue = (e: FormEvent<HTMLInputElement>) => {
    setMinValue(e.currentTarget.valueAsNumber)
  }
  const changeMaxValue = (e: FormEvent<HTMLInputElement>) => {
    setMaxValue(e.currentTarget.valueAsNumber)
  }

  useEffect(() => {
    if (minValue > maxValue || minValue < 0 || minValue === maxValue) {
      dispatch(setErrorAC(true))
    } else {
      dispatch(setErrorAC(false))
    }
  }, [minValue, maxValue])

  return (
    <div className={style.outerborder}>
      <div className={style.content}>
        <div className={style.inputText}>
          <span>max value:</span> <input value={maxValue} type={'number'} onChange={changeMaxValue} className={error ? style.inputError : style.input} />
        </div>
        <div className={style.inputText}>
          <span>min value:</span> <input value={minValue} type={'number'} onChange={changeMinValue} className={error ? style.inputError : style.input} />
        </div>
      </div>
      <div className={style.buttonContainer}>
        <UniversalButton handler={onClickHandler} name={'set'} disable={error} />
      </div>
    </div>
  )
}
