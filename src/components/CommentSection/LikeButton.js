import React, {useEffect, useState} from "react";
import "./CommentSection.css";
import axios from "axios";
const LikeButton = ({commentId, userId}) => {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    useEffect(() => {
        getLikes();
        getLike();
    }, [commentId, userId]);

    const getLikes = () => {
        axios.get(`http://localhost:5000/comment/getLikes/${commentId}`)
            .then((res) => {
                console.log(res);
                setLikes(res.data.length);
            }).catch((err) => {
            console.log(err);
        });
    }

    const getLike = () => {
        axios.get(`http://localhost:5000/comment/getLike/${commentId}/${userId}`)
            .then((res) => {
                console.log(res);
                setLiked(res.data.length > 0);
            }).catch((err) => {
            console.log(err);
        });
    }
    const handleLike = () => {
        const token = localStorage.getItem("token");
        if(token)
            {
                axios.post(`http://localhost:5000/comment/handleLike`, {comment_id: commentId, user_id: userId})
                    .then((res) => {
                        console.log(res);
                        getLikes();
                        getLike();
                    }).catch((err) => {
                    console.log(err);
                });
            }
    }

  return (
    <div className="row">
      <div className="col-4">
        <label className="container p-0 like-button d-flex flex-column align-items-end">
          <input type="checkbox" checked={liked} onChange={handleLike} />
          <div className="checkmark">
            <svg viewBox="0 0 256 256">
              <rect fill="none" height="256" width="256"></rect>
              <path
                d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                strokeWidth="20px"
                stroke="#FFF"
                fill="none"
              ></path>
            </svg>
          </div>
        </label>
      </div>
      <div className="col-8 p-1 d-flex flex-column justify-content-end ">
          {likes === 0 ? "" : (likes === 1 ? "1 like" : `${likes} likes`)}
      </div>
    </div>
  );
};

export default LikeButton;
