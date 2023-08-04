import React, { useState } from "react";
import "./CommentSection.css";

const ReplyForm = ({ onDataReceived, commentsData, parentCommentId }) => {
  const [replyText, setReplyText] = useState("");

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
    // Calculate the new reply's ID based on commentsData
    const newReplyId =
      commentsData.length > 0
        ? commentsData[commentsData.length - 1].id + 1
        : 1;

    const replyData = {
      id: newReplyId,
      user: "Rymjbeli",
      date: "10 aout 2023-22:39",
      text: replyText,
      replies: [],
      parentCommentId: parentCommentId,
    };
    onDataReceived(replyData);
    setReplyText("");
  };

  return (
    <>
      <div className="row write-comment">
        <div className="col-lg-1 col-md-2 col-sm-2 d-flex flex-column align-items-center">
          <img
            src={require("../../assets/rym.jpg")}
            alt=""
            className="user-image"
          />
        </div>
        <div className="col-lg-11 col-md-10 col-sm-10">
          <form onSubmit={handleSubmit}>
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
