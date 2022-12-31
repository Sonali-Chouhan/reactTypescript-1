import { useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { IPost } from "./CommonInterface";
import { deletePost, PostList, ShowPost } from "../Redux/Action/Action";
import { RootState } from "../Redux/Reducer";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let userData = useSelector((state: RootState) => {
    return state.reducer.GetPost;
  });

  let userAdd = useSelector((state: RootState) => {
    return state.reducer.addPost;
  });

  let userDelete = useSelector((state: RootState) => {
    return state.reducer.deletePost;
  });

  useEffect(() => {
    dispatch(PostList());
  }, []);

  const handleDelete = (id: number) => {
    dispatch(deletePost(id));
  };

  const handleShow = (id: number) => {
    navigate(`adduser/${id}`);
    dispatch(ShowPost(id));
  };

  useEffect(() => {
    if (userAdd) {
      dispatch(PostList());
    }
    if (userDelete) {
      dispatch(PostList());
    }
  }, [userAdd, userDelete]);
  
  return (
    <div>
      <div className="devTable">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Post</th>
              <th>Description</th>
              <th>Active</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((item: IPost, index: number) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={item.Photo} height="40px" width="40px" />
                    <span>{item.Name}</span>
                  </td>
                  <td>{item.Post}</td>
                  <td>{item.Description}</td>
                  <td>{item.Active}</td>
                  <td>
                    <AiOutlineDelete onClick={() => handleDelete(item._id)} />
                  </td>
                  <td>
                    <AiOutlineEdit onClick={() => handleShow(item._id)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserDetails;
