const intival = { 
    counter : 0
}
export const counterReducer = (state = { intival }, action) =>{
    switch (action.type) {
      case 'counter/incremented':
        return { counter: state.counter + 1 }
      case 'counter/decremented':
        return { counter: state.counter - 1}
      default:
        return state
    }
  }