import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IProps } from "../../Container/CommonInterface";
import { AddPost, UpdatePost } from "../Redux/Action/Action";
import { RootState } from "../Redux/Reducer";

const AddUser = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [img, setImg] = useState<string>("");
  const [state, setState] = useState<IProps | any>({
    Name: "",
    Post: "",
    Description: "",
    Active: "",
  });
  let singlePost = useSelector((state: RootState) => {
    return state.reducer.showPost;
  });
  const handleChnage = (e: any) => {
    let file = e.target.files[0];
    setImg(file);
    // if (event?.target?.files) {
    //   setImg(event?.target?.files[0])
    //   // setImg(URL.createObjectURL(event?.target?.files[0]));
    // }
  };
  const handleClick = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("Photo", img);
    formData.append("Name", state.Name);
    formData.append("Post", state.Post);
    formData.append("Description", state.Description);
    formData.append("Active", state.Active);
    formData.append("id", id ? id : "");
    if (id) {
      dispatch(UpdatePost(formData, id));
    } else {
      dispatch(AddPost(formData));
    }
    setState({
      Name: "",
      Post: "",
      Description: "",
      Active: "",
    });
  };
  useEffect(() => {
    if (singlePost) {
      // setImg({
      //   singlePost.Photo
      // })
      setState({
        ...state,
        Name: singlePost.Name,
        Description: singlePost.Description,
        Post: singlePost.Post,
        Active: singlePost.Active,
        id: singlePost._id,
      });
    }
  }, [singlePost]);
  const handleCancel = () => {
    navigate("/");
  };
  return (
    <div className="formDiv">
      <form>
        <label>Upload File</label>
        <input
          type="file"
          accept="image/*"
          name="image"
          id="file"
          onChange={handleChnage}
        />
        <br />
        <label>Enter-Name</label>
        <input
          type="text"
          name="Name"
          value={state.Name}
          onChange={(e) => setState({ ...state, Name: e.target.value })}
        />
        <br />
        <label>Enter-Post</label>
        <input
          type="text"
          name="Post"
          value={state.Post}
          onChange={(e) => setState({ ...state, Post: e.target.value })}
        />
        <br />
        <label>Description</label>
        <input
          type="text"
          name="Description"
          value={state.Description}
          onChange={(e) => setState({ ...state, Description: e.target.value })}
        />
        <br />
        <label>Enter-Status</label>
        <input
          type="number"
          name="Active"
          value={state.Active}
          onChange={(e) => setState({ ...state, Active: e.target.value })}
        />
        <br />
        {id ? (
          <span>
            <button type="submit" onClick={(e) => handleClick(e)}>
              Save
            </button>{" "}
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </span>
        ) : (
          <button type="submit" onClick={(e) => handleClick(e)}>
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default AddUser;
