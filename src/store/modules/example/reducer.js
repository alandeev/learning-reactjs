import * as types from '../types';

const initalState = {
  isClicked: false
}

const reducer = (state=initalState, action) => {
  switch (action.type) {
    case types.BUTTON_CLICKED_REQUEST:
      console.log("Estou fazendo requisição");
      return state
      
    case types.BUTTON_CLICKED_FAILURE:
      console.log("Deu error =(")
      return state  
  
    case types.BUTTON_CLICKED_SUCCESS:
      console.log("SUCESSOO!!!")
      return { ...state, isClicked: !state.isClicked }

    default:
      return state;
  }
}

export default reducer;