import React, {useContext, useEffect, useState} from "react";
import "./CommentSection.css";
import {authContext} from "../../helpers/authContext";
import axios from "axios";

const ReplyForm = ({parentCommentId, mediaId, mediaType,onDataReceived }) => {
  const [replyText, setReplyText] = useState("");
  const { user } = useContext(authContext);
  const token = localStorage.getItem("token");
  const [profileImage, setProfileImage] = useState(''); // State for profile image
  const [imageUrl, setImageUrl] = useState(require("../../assets/avatar.png"));

  useEffect(() => {
    setProfileImage(user ? user.image : "");
    // Update imageUrl based on profileImage
    setImageUrl(
        profileImage
            ? `http://localhost:5000/uploads/${profileImage}`
            : require("../../assets/avatar.png")
    );
  }, [profileImage,user]);
  const handleChange = (event) => {
    setReplyText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!replyText.trim()) {
      // If the reply text is empty or contains only whitespace, don't add the reply
      return;
    }
    console.log("Form submitted!");
    console.log("parent id")
    console.log("parent id",parentCommentId)
    const replyData = {
      text: replyText,
      user_id: user?.id,
      created_at: new Date(),
      parent_id: parentCommentId,
      media_type: mediaType,
      media_id: mediaId,
    };
    axios.post("http://localhost:5000/comment/add",replyData)
        .then((res) => {
            setReplyText("");
            onDataReceived();
        }).catch((err) => {
          console.log("error", err)
        })
  };

  return (
    <>
      <div className="row write-comment">
        { token && (<div className="col-lg-1 col-md-2 col-sm-2 d-flex flex-column align-items-center">
          <img
              src={imageUrl}
              alt=""
              className="user-image"
          />
        </div>)}
        <div className={`${token ? "col-lg-11 col-md-10 col-sm-10" : "col-12"}`}>
          <form onSubmit={handleSubmit} className={`reply-box ${token ? "" : "disabled"}`}>
            <div className="container box-container">
              <div className="row">
                <div className="col-lg-11 col-md-10 col-sm-10">
                  <textarea
                    id="reply"
                    name="reply"
                    rows="1"
                    placeholder="Write a comment ..."
                    value={replyText}
                    onChange={handleChange}
                    disabled={!token}
                  ></textarea>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 formatting">
                  <button type="submit" className="send" title="Send">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        stroke="#ffffff"
                        d="M12 5L12 20"
                      ></path>
                      <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        stroke="#ffffff"
                        d="M7 9L11.2929 4.70711C11.6262 4.37377 11.7929 4.20711 12 4.20711C12.2071 4.20711 12.3738 4.37377 12.7071 4.70711L17 9"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReplyForm;
