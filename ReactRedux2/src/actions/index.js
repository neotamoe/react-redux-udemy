export function selectBook(book){
  // selectBook is an ActionCreator; it needs to return an action (an object with a type property)
  return {
    // typically types get moved out to separate file and then are a variable, not a string; see future tutorial
    type: 'BOOK_SELECTED',
    payload: book
  };
}
