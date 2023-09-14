import React from 'react';
import './MediaInfos.css';
const MediaInfos = ({media}) => {
  return (
    <div className='media-infos'>
      <span>Details</span>
      <hr className="custom-hr"/> 
      <div className="container">
        <div className="row">
          <div className="col-5">
            Country
          </div>
          <div className="col-7 info">
            {media?.country
                ? media.country
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                    .join(" ")
                : ""}
          </div>
        </div>
        <hr className='mt-3 mb-3'/>
      </div>  
      <div className="container">
        <div className="row">
          <div className="col-5">
            Language
          </div>
          <div className="col-7 info">
            {media?.language
                ? media.language
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                    .join(" ")
                : ""}
          </div>
        </div>
        <hr className='mt-3 mb-3'/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-5">
            Original release
          </div>
          <div className="col-7 info">
            {media?.releasedate && new Date(media.releasedate).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
        </div>
        <hr className='mt-3 mb-3'/>
      </div> 
      <div className="container">
        <div className="row">
          <div className="col-5">
            Number of seasons
          </div>
          <div className="col-7 info">
            {media?.nbseason}
          </div>
        </div>
        <hr className='mt-3 mb-3'/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-5">
            Number of episodes
          </div>
          <div className="col-7 info">
            36
          </div>
        </div>
        <hr className='mt-3 mb-3'/>
      </div>
      <div className="container">
        <div className="row">
            {media?.creator &&(<div className="col-5">
                Created by
            </div>)}
          <div className="col-7 info">
            {media?.creator
                ? media.creator
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                    .join(" ")
                : ""}
          </div>
        </div>
          {media?.creator && (<hr className='mt-3 mb-3'/>)}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-5">
            Running time
          </div>
          <div className="col-7 info">
            {media?.runningtime} minutes
          </div>
        </div>
        <hr className='mt-3 mb-3'/>
      </div>  
    </div>
  );
}

export default MediaInfos;
