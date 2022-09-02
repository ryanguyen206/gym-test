import React, {createContext, useReducer} from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
    //check the action type
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter(workout => workout._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const WorkoutsContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts:null
  })

 
                                    //reducer function name, inital value of state

  return (
    <WorkoutsContext.Provider value={{...state, dispatch}}>
        {children}
    </WorkoutsContext.Provider>
  )
}

