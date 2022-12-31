import { IPost } from "../../Component/CommonInterface";
import { domain } from "../BasePath";
import { ADD_POST, DELETE_POST, ERROR, GET_LIST, SHOW_POST, UPDATE_POST } from "../CommonType";

export const PostList: any = () => {
  return (dispatch: any) => {
    return fetch(`${domain}/get`)
      .then((res) => res.json())
      .then((ress) => {
        dispatch({
          type: GET_LIST,
          payload: ress,
        });
      })
      .catch((error) => {
        dispatch({
          type: ERROR,
          payload: error.response,
        });
      });
  };
};
export const AddPost: any = (data: IPost | any) => {
  return (dispatch: any) => {
    fetch(`${domain}/post`, {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ADD_POST, payload:data});
      });
  };
};
export const deletePost: any = (id: number) => (dispatch: any) => {
  fetch(`${domain}/delete/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: DELETE_POST,
        payload: post,
      })
    );
};
export const ShowPost: any = (id:number) => {
  return (dispatch: any) => {
    return fetch(`${domain}/get/${id}`)
      .then((res) => res.json())
      .then((ress) => {
        dispatch({
          type:SHOW_POST,
          payload: ress,
        });
      })
      .catch((error) => {
        dispatch({
          type: ERROR,
          payload: error.response,
        });
      });
  };
};
export const UpdatePost :any=(data:any,id:any)=>{
  console.log(234,id)
  return (dispatch:any) => {
   
    fetch(`${domain}/update/${id}`, {
      method: 'PUT',
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Accept': 'application/json'
      // },
      body:data
    })
    .then(res => res.json())
    .then(res => dispatch({type:UPDATE_POST,payload:console.log(777,res) }))

  }
}