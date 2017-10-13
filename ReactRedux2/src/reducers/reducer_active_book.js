// all reducers get two parameters (current state, action)
// reducers are only called when an action occurs
// state argument is not application state; only the state this reducer is responsible for

export default function(state =  null, action){
  switch (action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state
}
