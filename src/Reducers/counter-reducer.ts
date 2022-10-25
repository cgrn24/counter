export type AddCountActionType = ReturnType<typeof addCountAC>
export type ResetActionType = ReturnType<typeof resetAC>
export type ChangeSettingsActionType = ReturnType<typeof changeSettingsAC>
export type SetErrorActionType = ReturnType<typeof setErrorAC>

type ActionType = AddCountActionType | ResetActionType | ChangeSettingsActionType | SetErrorActionType

type CountStateType = {
  count: number
  minValue: number
  maxValue: number
  error: boolean
}

const initialState: CountStateType = {
  count: 0,
  minValue: 0,
  maxValue: 5,
  error: false,
}

export const tasksReducer = (state: CountStateType = initialState, action: ActionType): CountStateType => {
  switch (action.type) {
    case 'ADD-COUNT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'RESET':
      return {
        ...state,
        count: state.minValue,
      }
    case 'CHANGE-SETTINGS':
      return {
        ...state,
        minValue: action.minValue,
        maxValue: action.maxValue,
        count: action.minValue,
      }
    case 'SET-ERROR':
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}

export const addCountAC = () => {
  return { type: 'ADD-COUNT' } as const
}
export const resetAC = () => {
  return { type: 'RESET' } as const
}
export const changeSettingsAC = (minValue: number, maxValue: number) => {
  return { type: 'CHANGE-SETTINGS', minValue, maxValue } as const
}
export const setErrorAC = (error: boolean) => {
  return { type: 'SET-ERROR', error } as const
}
