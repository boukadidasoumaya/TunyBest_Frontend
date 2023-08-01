import React from "react";
import "./CommentSection.css";
const CommentSection = () => {
  return (
    <div className="comment-section">
      <span>Comments</span>
      <hr className="custom-hr" />

      <div className="container comments p-4 ">
        <div className="row all-comments custom-scrollbar">
          <div className="row">
            <div className="col-lg-1 col-md-2 col-sm-2">
              <img src={require("../../assets/rym.jpg")} alt="" />
            </div>
            <div className="col-lg-11 col-md-10 col-sm-10">
              <div className="one-comment">
                <div className="writer fw-bold">Soumaya Boukadida</div>
                <div className="date">10 juillet 2023-22:39</div>
                <div className="content mt-2">
                  C'est très jolie cette serie. Je la recommande.
                </div>
                <div className="row">
                  <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="row">
                      <div className="col-4">
                        <label className="container p-0 like-button d-flex flex-column align-items-end">
                          <input type="checkbox" />
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
                      <div className="col-8 p-1 d-flex flex-column justify-content-end ">5 likes</div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-md-3 col-sm-6">
                    <div className="row">
                      <div className="col-4">
                        <label className="container p-0 like-button d-flex flex-column align-items-end">
                          <input type="checkbox" />
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
                      <div className="col-8 p-1 d-flex flex-column justify-content-end ">Reply</div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-4 custom-hr" />
        <div className="row write-comment">
          <div className="col-lg-1 col-md-2 col-sm-2 d-flex flex-column align-items-center">
            <img
              src={require("../../assets/rym.jpg")}
              alt=""
              className="user-image"
            />
          </div>
          <div className="col-lg-11 col-md-10 col-sm-10">
            <form>
              <div className="container box-container">
                <div className="row">
                  <div className="col-lg-11 col-md-10 col-sm-10">
                    <textarea
                      id="reply"
                      name="reply"
                      rows="1"
                      placeholder="Write a comment ..."
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
      </div>
    </div>
  );
};

export default CommentSection;
