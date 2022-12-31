// import { AddPost } from "../Action/Action";
import { ADD_POST, DELETE_POST, ERROR, GET_LIST, SHOW_POST } from "../CommonType";

const initialState = {
  GetPost: [],
  addPost: [],
  deletePost: [],
  showPost:[]
};
export const reducer = function (state = initialState, action: any) {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        GetPost: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        addPost: action.payload,
      };
    case DELETE_POST:
      return {
        ...state,
        deletePost: action.payload,
      };
    case SHOW_POST:
      return{
        ...state,
        showPost:action.payload
      }
    case ERROR:
      return {
        ...state,
        errors: console.log("error", action.payload),
      };
     

    default:
      return state;
  }
};
