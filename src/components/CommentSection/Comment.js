import React, {useContext, useEffect, useState} from "react";
import ReplyForm from "./ReplyForm";
import "./CommentSection.css";
import LikeButton from "./LikeButton";
import axios from "axios";
import Modal from "react-modal";
import {authContext} from "../../helpers/authContext";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    color: "white",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(15, 19, 30, 0.5)",
  },
};
const Comment = ({
  comment,
  colWidthIm,
  colLikeLg,
  colLikeMd,
  moreThanOne,
  mediaId,
  mediaType,
  handleReplyData
}) => {
    const { user } = useContext(authContext);
    const [viewReplies, setViewReplies] = useState(false);
    const [viewReplyForm, setViewReplyForm] = useState(false);
    const token = localStorage.getItem("token");

  const formatCreatedAt = (createdAt) => {
    const date = new Date(createdAt);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const formattedCreatedAt = formatCreatedAt(comment.created_at);

  const handleViewReplies = () => {
    setViewReplies(!viewReplies);
  };

  const handleViewReplyForm = () => {
    setViewReplyForm(!viewReplyForm);
  };
const [imageUrl, setImageUrl ] = useState(null);
  useEffect(() => {
    setImageUrl(
        comment.user_image
            ? `http://localhost:5000/uploads/${comment.user_image}`
            : require("../../assets/avatar.png")
    );
  }, [comment, user]);


 const handleDeleteComment = () => {
    axios.post(`http://localhost:5000/comment/delete/${comment?.id}`)
        .then((res) => {
            console.log(res);
            console.log("delete comment");
            handleReplyData();
        }).catch((err) => {
        console.log(err);
    });
  }

  const [modalIsOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }
  return (
    <div className="row">
      <div className={`col-lg-${1} col-md-${colWidthIm} col-sm-2`}>
        <img src={imageUrl} alt="" />
      </div>
      <div className={`col-lg-${11} col-md-${12 - colWidthIm} col-sm-10`}>
        <div className="one-comment">
          {/* Comment content */}
          <div className="writer fw-bold">{comment?.username}</div>
          <div className="date">{formattedCreatedAt}</div>
          <div className="d-flex justify-content-between align-items-end" >
            <div className="content mt-2">{comment?.text}</div>
              { comment?.user_id === user?.id && (<button className="btn" onClick={openModal}>
                  <i className="fa-solid fa-trash"></i>
              </button>)}
          </div>

          {/* Like and Reply buttons */}
          <div className="container">
            <div className="row mt-2">
              <div
                className={`col-lg-${colLikeLg} col-md-${colLikeMd} col-sm-6`}
              >
                {/* Like button */}
                <LikeButton commentId={comment?.id} userId={user?.id} />
              </div>
                { token && (<div
                    className={`col-lg-${
                        colLikeLg + 1
                    } col-md-${colLikeMd} col-sm-6`}
                >
                    {/* Reply button */}
                    <div
                        className="row"
                        style={{cursor: "pointer"}}
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
                </div>)}
            </div>

            {/* View replies */}
            {comment?.replies && comment?.replies?.length > 0 && (
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
                    key={index}
                    mediaId={mediaId}
                    mediaType={mediaType}
                    comment={reply}
                    colWidthIm={2}
                    colLikeLg={3}
                    colLikeMd={4}
                    moreThanOne={index !== comment.replies.length - 1}
                    handleReplyData={handleReplyData} // Pass the function as prop

                  />
                ))}
            </div>

            {/* Reply form */}
            {viewReplyForm && (
              <ReplyForm
                mediaId={mediaId}
                mediaType={mediaType}
                parentCommentId={comment?.id} // Pass the parent comment ID as prop
                onDataReceived={handleReplyData}
              />
            )}
          </div>
          {moreThanOne ? <hr /> : null}
        </div>
      </div>

      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
      >
        <div
            className="modal-content p-3 m-3 d-flex flex-column align-items-center justify-content-center ">
          <h4 className="">Confirm</h4>
          <p className="text-center">Are you sure you want to delete this comment?</p>
            <div className="confirm row">
                <div className="col-md-6 d-flex justify-content-lg-end justify-content-md-center justify-content-sm-center ">
                    <button onClick={handleDeleteComment}>
                        <span>Delete</span>
                    </button>
                </div>
                <div className="col-md-6 d-flex justify-content-center ">
                    <button onClick={closeModal}>
                        <span>Cancel</span>
                    </button>
                </div>
            </div>
        </div>
      </Modal>

    </div>
  );
};

export default Comment;



