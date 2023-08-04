import React, { useState } from "react";
import Comment from "./Comment";
import ReplyForm from "./ReplyForm";
import "./CommentSection.css";

const CommentsSection = () => {
  const [commentsData, setCommentsData] = useState([
    {
      id: 1,
      user: "Soumaya Boukadida",
      date: "10 juillet 2023-22:39",
      text: "C'est très jolie cette serie. Je la recommande.",
      replies: [
        {
          id: 2,
          user: "Another User",
          date: "11 juillet 2023-10:00",
          text: "I agree with you!",
          replies: [
            {
              id: 3,
              user: "Soumaya Boukadida",
              date: "12 juillet 2023-14:30",
              text: "Thanks for your reply!",
              replies: [],
            },
          ],
        },
      ],
    },
  ]);

  const handleReplyData = (replyData) => {
    setCommentsData((prevComments) => {
      const updatedComments = [...prevComments];

      if (replyData.parentCommentId) {
        // Find the parent comment in the existing data
        const parentComment = findCommentById(updatedComments, replyData.parentCommentId);

        if (parentComment) {
          // Add the reply to the parent comment's replies
          parentComment.replies.push(replyData);
        }
      } else {
        // If there is no parentCommentId, it's a top-level comment
        updatedComments.push(replyData);
      }

      return updatedComments;
    });
  };

  const findCommentById = (comments, id) => {
    for (const comment of comments) {
      if (comment.id === id) {
        return comment;
      }
      if (comment.replies.length > 0) {
        const nestedComment = findCommentById(comment.replies, id);
        if (nestedComment) {
          return nestedComment;
        }
      }
    }
    return null;
  };

  return (
    <div className="comment-section">
      <span className="span">Comments</span>
      <hr className="custom-hr" />
      <div className="container comments p-4">
        <div className="row all-comments custom-scrollbar">
          {commentsData.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              colWidthIm={1}
              colLikeLg={2}
              colLikeMd={4}
              moreeThanOne={commentsData && comment.id !== commentsData.length}
              handleReplyData={handleReplyData} // Pass the function as prop
            />
          ))}
        </div>
        <hr className="mt-4 custom-hr" />

        <ReplyForm onDataReceived={handleReplyData} commentsData={commentsData}/>
      </div>
    </div>
  );
};

export default CommentsSection;
