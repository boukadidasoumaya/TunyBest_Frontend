import React, {useEffect, useState} from "react";
import Comment from "./Comment";
import ReplyForm from "./ReplyForm";
import "./CommentSection.css";
import axios from "axios";

const CommentsSection = ({media, mediaType}) => {
  const [comments, setComments] = useState([]);


    useEffect( () => {
    handleReplyData()
  }, [mediaType, media])


    const handleReplyData = () => {
        axios.get(`http://localhost:5000/comment?mediaId=${media?.id}&mediaType=${mediaType}`).then(
            (response) => {
                console.log(media?.title)
                console.log(mediaType)
                console.log(response.data);
                setComments(response.data);
                console.log(comments)
            }).catch((err) => {
                console.log(err);
            }
        )
    };

  return (
    <div className="comment-section" >
      <span className="span">Comments</span>
      <hr className="custom-hr" />
      <div className="container comments p-4 ">
        <div className="row all-comments custom-scrollbar">
          {comments.map((comment,index) => (
            <Comment
              key={index}
              comment={comment}
              mediaId={media?.id}
              mediaType={mediaType}
              colWidthIm={1}
              colLikeLg={2}
              colLikeMd={4}
              moreThanOne={comments && index < comments.length-1}
              handleReplyData={handleReplyData} // Pass the function as prop
            />
          ))}
        </div>
        <hr className="mt-4 custom-hr" />

          <ReplyForm
              mediaId={media?.id}
              mediaType={mediaType}
              onDataReceived={handleReplyData}
          />

      </div>
    </div>
  );
};

export default CommentsSection;
