import React, { useState } from "react";
import ReplyForm from "./ReplyForm";
import "./CommentSection.css";
import LikeButton from "./LikeButton";

const Comment = ({
  comment,
  colWidthIm,
  colLikeLg,
  colLikeMd,
  moreeThanOne,
  handleReplyData, // Receive the function as prop
}) => {
  const [viewReplies, setViewReplies] = useState(false);
  const [viewReplyForm, setViewReplyForm] = useState(false);

  const handleViewReplies = () => {
    setViewReplies(!viewReplies);
  };

  const handleViewReplyForm = () => {
    setViewReplyForm(!viewReplyForm);
  };

  return (
    <div className="row">
      <div className={`col-lg-${1} col-md-${colWidthIm} col-sm-2`}>
        <img src={require("../../assets/rym.jpg")} alt="" />
      </div>
      <div className={`col-lg-${11} col-md-${12 - colWidthIm} col-sm-10`}>
        <div className="one-comment">
          {/* Comment content */}
          <div className="writer fw-bold">{comment.user}</div>
          <div className="date">{comment.date}</div>
          <div className="content mt-2">{comment.text}</div>

          {/* Like and Reply buttons */}
          <div className="container">
            <div className="row mt-2">
              <div
                className={`col-lg-${colLikeLg} col-md-${colLikeMd} col-sm-6`}
              >
                {/* Like button */}
                <LikeButton />
              </div>
              <div
                className={`col-lg-${
                  colLikeLg + 1
                } col-md-${colLikeMd} col-sm-6`}
              >
                {/* Reply button */}
                <div
                  className="row"
                  style={{ cursor: "pointer" }}
                  onClick={handleViewReplyForm}
                >
                  <div className="col-4 d-flex justify-content-end">
                    <div className="container p-0 reply-button d-flex align-items-center justify-content-end">
                      <i className="fa-regular fa-comment"></i>
                    </div>
                  </div>
                  <div className="col-8 p-1 d-flex flex-column justify-content-end">
                    Reply
                  </div>
                </div>
              </div>
            </div>

            {/* View replies */}
            {comment.replies && comment.replies.length > 0 && (
              <div
                className="row"
                style={{ cursor: "pointer" }}
                onClick={handleViewReplies}
              >
                <div className="col-lg-5 col-md-8 col-sm-12 d-flex align-items-end justify-content-lg-center justify-content-center reply-button">
                  <img src={require("../../assets/arrow-right.png")} alt="" />
                  <span>
                    {viewReplies
                      ? `Hide ${comment.replies.length} `
                      : `View ${comment.replies.length} `}
                    {comment.replies.length > 1 ? "replies" : "reply"}
                  </span>
                </div>
              </div>
            )}

            {/* Display replies */}
            <div className="mt-3">
              {viewReplies &&
                comment.replies.map((reply, index) => (
                  <Comment
                    key={reply.id}
                    comment={reply}
                    colWidthIm={2}
                    colLikeLg={3}
                    colLikeMd={4}
                    moreeThanOne={index !== comment.replies.length - 1}
                    handleReplyData={handleReplyData} // Pass the function as prop
                  />
                ))}
            </div>

            {/* Reply form */}
            {viewReplyForm && (
              <ReplyForm
                commentsData={comment.replies}
                onDataReceived={handleReplyData}
                parentCommentId={comment.id} // Pass the parent comment ID as prop
              />
            )}
          </div>
          {moreeThanOne ? <hr /> : null}
        </div>
      </div>
    </div>
  );
};

export default Comment;
