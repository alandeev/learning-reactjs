const initalState = {
  isClicked: false
}

const reducer = (state=initalState, action) => {
  switch (action.type) {
    case 'BUTTON_CLICKED':
      return { ...state, isClicked: !state.isClicked }
  
    default:
      return state;
  }
}

export default reducer;