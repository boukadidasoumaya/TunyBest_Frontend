import React from 'react';
import './MediaInfos.css';
const MediaInfos = () => {
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
            United Kingdom
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
            English
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
            12 September 2013 –3 April 2022
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
            6
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
          <div className="col-5">
            Created by
          </div>
          <div className="col-7 info">
            Steven Knight
          </div>
        </div>
        <hr className='mt-3 mb-3'/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-5">
            Running time
          </div>
          <div className="col-7 info">
            55–73 minutes
          </div>
        </div>
        <hr className='mt-3 mb-3'/>
      </div>  
    </div>
  );
}

export default MediaInfos;
