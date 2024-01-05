import React, { useEffect, useState, useContext } from "react";
import Trashi from "../img/trash.webp";
import Editi from "../img/edit.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import { AuthContext } from "../Context/authContext.jsx";
import moment from "moment";

const SinglePost = () => {
  const [post, setPost] = useState({});
  const { currentUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const postID = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/posts/${postID}`, {
          method: "GET",
        }).then((res) => res.json());
        setPost(res);
      } catch (err) {
        console.log(err);
      }
    };
    getPost();
    console.log(currentUser);
  }, [postID]);

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:3000/api/posts/${postID}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="singlePost">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username &&
            <div className="edit">
              <Link className="link" to={`/log?edit=2`}>
                <img src={Editi} alt="" />
              </Link>
              <img onClick={handleDelete} src={Trashi} alt="" />
            </div>
          }
        </div>
        <h1>{post.title}</h1>
        {post.postBody}
      </div>
      <Menu />
    </div>
  );
};

export default SinglePost;
