import s from './Button.module.css'

type PropsType = {
  handler: () => void
  name: string
  disable: boolean
}

export const UniversalButton = (props: PropsType) => {
  return (
    <div>
      <button onClick={props.handler} disabled={props.disable} className={s.button}>
        {props.name}
      </button>
    </div>
  )
}
