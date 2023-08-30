import React from "react";
import "./List.css";
import { NavLink } from "react-router-dom";
const List = () => {
  const listData = [
    {
      name: "Peacky Blinders",
      quality: "HD",
      date: "2021",
      category: "thriller",
      rate: "9.2",
      time: "120min",
      imageUrl: require("../../assets/peakyblinderssmall.jpg"),
    },
    {
      name: "Peacky Blinders",
      quality: "HD",
      date: "2021",
      category: "thriller",
      rate: "9.2",
      time: "120min",
      imageUrl: require("../../assets/peakyblinderssmall.jpg"),
    },
    {
      name: "Peacky Blinders",
      quality: "HD",
      date: "2021",
      category: "thriller",
      rate: "9.2",
      time: "120min",
      imageUrl: require("../../assets/peakyblinderssmall.jpg"),
    },
    {
      name: "Peacky Blinders",
      quality: "HD",
      date: "2021",
      category: "thriller",
      rate: "9.2",
      time: "120min",
      imageUrl: require("../../assets/peakyblinderssmall.jpg"),
    },
    {
      name: "Peacky Blinders",
      quality: "HD",
      date: "2021",
      category: "thriller",
      rate: "9.2",
      time: "120min",
      imageUrl: require("../../assets/peakyblinderssmall.jpg"),
    },
    {
      name: "Peacky Blinders",
      quality: "HD",
      date: "2021",
      category: "thriller",
      rate: "9.2",
      time: "120min",
      imageUrl: require("../../assets/peakyblinderssmall.jpg"),
    },
    {
      name: "Peacky Blinders",
      quality: "HD",
      date: "2021",
      category: "thriller",
      rate: "9.2",
      time: "120min",
      imageUrl: require("../../assets/peakyblinderssmall.jpg"),
    },
    {
      name: "Peacky Blinders",
      quality: "HD",
      date: "2021",
      category: "thriller",
      rate: "9.2",
      time: "120min",
      imageUrl: require("../../assets/peakyblinderssmall.jpg"),
    },
  ];

  return (
    <div className="list">
      <div className="list-container row ">
        {listData.map((item, index) => (
          <div className="latest col-lg-2 col-md-3 col-sm-6 mb-4" key={index}>
            <div className="box">
              <NavLink to="/details/1">
                <div className="card">
                  <div className="details d-flex flex-column justify-content-end">
                    <div className="details-content row d-flex">
                      <div className="left col-8 p-0 mt-1  ">
                        <div className="date_quality">
                          <p className="quality">{item.quality}</p>
                          <p className="date">{item.date}</p>
                        </div>
                        <p className="category">{item.category}</p>
                        <div className="info">
                          <div className="rate">
                            <i className="fa-solid fa-star" />
                            <p>{item.rate}</p>
                          </div>
                          <div className="time">
                            <i className="fa-regular fa-clock" />
                            <p>{item.time}</p>
                          </div>
                        </div>
                      </div>
                      <div className="right col-4 p-0 mt-1  ">
                        <i className="mt-4 fa-solid fa-play" />
                      </div>
                    </div>
                  </div>
                  <img src={item.imageUrl} alt={`Item ${index + 1}`} />
                </div>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
