import {createStore} from 'redux'

const initialState ={
    token:null
}

const reducer = (state,action)=>{
    switch(action.type){

    case "set_token":
        return{
                ...state,
                token: action.payload.token
            }
    
    default:
        return state
    }
}

// const store = createStore(reducer)
// export default store


export default createStore(reducer)