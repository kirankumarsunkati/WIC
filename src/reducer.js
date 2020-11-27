const initialState = {
    result : 1,
    lastValues: []
  }
  const reducer = (state = initialState,action) => { 
    console.log(action.type);
    switch(action.type){
      case "INCREMENT":
          state = {
              ...state,
              result:state.result+action.payload,
              lastValues:[...state.lastValues,action.payload]
          } 
          break;
    
      case "DECREMENT":
          state = {
            ...state,
              result:state.result-action.payload
          }
          break;
    }
    return state
  
  }
  export default reducer;