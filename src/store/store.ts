import { combineReducers, configureStore} from '@reduxjs/toolkit'
import modalSlice from './reducer/modalSlice'
import commentSlice from './reducer/commentSlice'


const rootReducer = combineReducers( {
    modalSlice,
    commentSlice
})

export const setupStore = () => {
    return configureStore({
        reducer : rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']